import { Meal, MealType } from '#/shared';
import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { GetPlannedMealsQueryResult } from '#/core/planning/meal/repositories/meal.read-repository';

@Injectable()
export class MealSerializer extends BaseSerializer<GetPlannedMealsQueryResult[number], Meal> {
  public serialize(meal: GetPlannedMealsQueryResult[number]): Meal {
    return {
      id: meal.id,
      date: meal.date.getTime(),
      nbPortions: meal.nbPortions,
      mealType: meal.mealType as MealType,
      recipe: {
        id: meal.recipe.id,
        name: meal.recipe.name,
        illustrationUrl: meal.recipe.illustrationUrl,
      },
    };
  }
}
