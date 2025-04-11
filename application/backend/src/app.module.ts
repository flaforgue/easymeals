import { AuthModule } from '#/infrastructure/driving/modules/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ShoppingModule } from '#/infrastructure/driving/modules/shopping.module';
import { UserModule } from '#/infrastructure/driving/modules/user.module';
import { CookingModule } from '#/infrastructure/driving/modules/cooking.module';
import { PlanningModule } from '#/infrastructure/driving/modules/planning.module';
import { SharedModule } from '#/infrastructure/driving/modules/shared.module';
import { UploadModule } from '#/infrastructure/driving/modules/upload.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      cache: true,
    }),
    SharedModule,
    UserModule,
    UploadModule,

    CookingModule,
    PlanningModule,
    ShoppingModule,
  ],
})
export class AppModule {}
