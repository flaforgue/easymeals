import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { CreateUserCommandHandler } from '#/core/user/user/commands/create-user/create-user.handler';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { User } from '#/prisma/client';
import { UserReadRepository } from '#/core/user/user/repositories/user.read-repository';
import { AuthException } from '#/core/generic/auth/auth.exception';
import { CreateUserCommand } from '#/core/user/user/commands/create-user/create-user.command';

interface Auth0AccessTokenPayload {
  iss: string;
  sub: string;
  aud: string[];
  iat: string;
  exp: string;
  azp: string;
  scope: string;
}

function mapToAuthUser(user: User): AuthUser {
  return {
    id: user.id,
    houseId: user.houseId,
  };
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(
    configService: ConfigService,
    private readonly userReadRepository: UserReadRepository,
    private readonly createUserCommandHandler: CreateUserCommandHandler,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 20,
        jwksUri: `${configService.getOrThrow<string>('AUTH0_ISSUER_URL')}.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.getOrThrow<string>('AUTH0_API_AUDIENCE'),
      issuer: configService.getOrThrow<string>('AUTH0_ISSUER_URL'),
      algorithms: ['RS256'],
    });
  }

  public async validate(payload: Auth0AccessTokenPayload): Promise<AuthUser> {
    const idpId = payload.sub;
    const existingUser = await this.userReadRepository.findOrNullByIdpId(idpId);

    if (existingUser !== null) {
      return mapToAuthUser(existingUser);
    }

    await this.createUserCommandHandler.handle(new CreateUserCommand(idpId));

    const newUser = await this.userReadRepository.findOrNullByIdpId(idpId);
    if (newUser === null) {
      throw new AuthException(`Could not create the authenticated user ${idpId}`);
    }

    return mapToAuthUser(newUser);
  }
}
