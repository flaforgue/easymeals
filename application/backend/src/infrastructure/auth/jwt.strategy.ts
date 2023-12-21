import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PrismaService } from '../database/prisma.service';
import { passportJwtSecret } from 'jwks-rsa';

interface Auth0AccessTokenPayload {
  iss: string;
  sub: string;
  aud: string[];
  iat: string;
  exp: string;
  azp: string;
  scope: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(
    private readonly prismaService: PrismaService,
    configService: ConfigService,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configService.get('AUTH0_ISSUER_URL')}.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get<string>('AUTH0_AUDIENCE'),
      issuer: configService.get<string>('AUTH0_ISSUER_URL'),
      algorithms: ['RS256'],
    });
  }

  public async validate(payload: Auth0AccessTokenPayload) {
    const idpId = payload.sub;
    const existingUser = await this.prismaService.user.findFirst({
      where: {
        idpId: idpId,
      },
    });

    if (existingUser !== null) {
      return existingUser;
    }

    return this.prismaService.user.create({
      data: {
        idpId: idpId,
      },
    });
  }
}