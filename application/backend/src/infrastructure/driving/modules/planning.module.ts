import { CreateMealHandler } from '#/core/planning/meal/commands/create-meal/create-meal.handler';
import { MoveMealHandler } from '#/core/planning/meal/commands/move-meal/move-meal.handler';
import { UpdateMealHandler } from '#/core/planning/meal/commands/update-meal/update-meal.handler';
import { MealReadRepository } from '#/core/planning/meal/repositories/meal.read-repository';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { MealController } from '#/infrastructure/driving/http/private/planning/meal/meal.controller';
import { MealSerializer } from '#/infrastructure/driving/http/private/planning/meal/outputs/meal.serializer';
import { PrismaModule } from '#/infrastructure/driving/modules/prisma.module';
import { PrismaMealReadRepository } from '#/infrastructure/driven/prisma/read/prisma-meal.read-repository';
import { PrismaMealWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-meal.write-repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  exports: [MealReadRepository],
  controllers: [MealController],
  providers: [
    CreateMealHandler,
    UpdateMealHandler,
    MoveMealHandler,
    MealSerializer,
    {
      provide: MealReadRepository,
      useClass: PrismaMealReadRepository,
    },
    {
      provide: MealWriteRepository,
      useClass: PrismaMealWriteRepository,
    },
  ],
})
export class PlanningModule {}
