import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from '#/infrastructure/driving/http/shared/auth/jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '#/infrastructure/driving/modules/user.module';

@Module({
  imports: [UserModule, ConfigModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  exports: [],
  providers: [JwtStrategy],
})
export class AuthModule {}
