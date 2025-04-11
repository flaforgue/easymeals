import { CreateMealCommand } from '#/core/planning/meal/commands/create-meal/create-meal.command';
import { Meal } from '#/core/planning/meal/entities/meal.entity';
import { MealReadRepository } from '#/core/planning/meal/repositories/meal.read-repository';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { ValidationException } from '#/core/generic/validation/validation.exception';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateMealHandler {
  public constructor(
    private readonly mealReadRepository: MealReadRepository,
    private readonly mealWriteRepository: MealWriteRepository,
  ) {}

  public async handle(command: CreateMealCommand): Promise<void> {
    const meal = new Meal(
      command.id,
      command.houseId,
      command.date,
      command.mealType,
      command.recipeId,
      command.nbPortions,
    );

    const doesExists = await this.mealReadRepository.doesExist(meal.houseId, meal.date, meal.mealType);
    if (doesExists) {
      throw new ValidationException('Un repas existe déjà pour cet emplacement');
    }

    return this.mealWriteRepository.create(meal);
  }
}
