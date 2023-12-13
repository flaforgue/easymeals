import { Module } from '@nestjs/common';
import { AuthModule } from './infrastructure/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './infrastructure/http/http.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      cache: true,
    }),
    HttpModule,
  ],
})
export class AppModule {}
