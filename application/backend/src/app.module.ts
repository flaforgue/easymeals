import { AuthModule } from './infrastructure/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './infrastructure/http/http.module';
import { Module } from '@nestjs/common';

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
