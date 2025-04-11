import { Meal } from '#/core/planning/meal/entities/meal.entity';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMealWriteRepository implements MealWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(meal: Meal): Promise<void> {
    await this.prisma.meal.create({
      data: {
        id: meal.id,
        houseId: meal.houseId,
        date: meal.date,
        mealType: meal.mealType,
        recipeId: meal.recipeId,
        nbPortions: meal.nbPortions,
      },
    });

    return;
  }

  public async update(meal: Meal): Promise<void> {
    await this.prisma.meal.update({
      where: {
        id: meal.id,
        houseId: meal.houseId,
      },
      data: {
        date: meal.date,
        mealType: meal.mealType,
        recipeId: meal.recipeId,
        nbPortions: meal.nbPortions,
      },
    });

    return;
  }

  public async delete(id: { mealId: string; houseId: string }): Promise<void> {
    await this.prisma.meal.delete({
      where: {
        id: id.mealId,
        houseId: id.houseId,
      },
    });

    return;
  }
}
