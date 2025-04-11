import { UpdateMealCommand } from '#/core/planning/meal/commands/update-meal/update-meal.command';
import { MealReadRepository } from '#/core/planning/meal/repositories/meal.read-repository';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateMealHandler {
  public constructor(
    private readonly mealReadRepository: MealReadRepository,
    private readonly mealWriteRepository: MealWriteRepository,
  ) {}

  public async handle(command: UpdateMealCommand): Promise<void> {
    const meal = await this.mealReadRepository.findEntityById({
      mealId: command.id,
      houseId: command.houseId,
    });

    meal.recipeId = command.recipeId;
    meal.nbPortions = command.nbPortions;

    return this.mealWriteRepository.update(meal);
  }
}
