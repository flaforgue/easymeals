import { MoveMealCommand } from '#/core/planning/meal/commands/move-meal/move-meal.command';
import { MealReadRepository } from '#/core/planning/meal/repositories/meal.read-repository';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { ValidationException } from '#/core/generic/validation/validation.exception';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoveMealHandler {
  public constructor(
    private readonly mealReadRepository: MealReadRepository,
    private readonly mealWriteRepository: MealWriteRepository,
  ) {}

  public async handle(command: MoveMealCommand): Promise<void> {
    if (command.newMealType !== 'lunch' && command.newMealType !== 'dinner') {
      throw new ValidationException(`Invalid meal type given: ${command.newMealType}`);
    }

    const replacedMeal = await this.mealReadRepository.findEntityByTimeslot({
      houseId: command.houseId,
      date: command.newDate,
      mealType: command.newMealType,
    });
    const movedMeal = await this.mealReadRepository.findEntityById({
      houseId: command.houseId,
      mealId: command.mealId,
    });

    const promises: Promise<void>[] = [];
    if (replacedMeal !== null) {
      replacedMeal.mealType = movedMeal.mealType;
      replacedMeal.date = movedMeal.date;
      promises.push(this.mealWriteRepository.update(replacedMeal));
    }

    movedMeal.date = command.newDate;
    movedMeal.mealType = command.newMealType;
    promises.push(this.mealWriteRepository.update(movedMeal));

    await Promise.all(promises);

    return;
  }
}
