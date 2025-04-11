import { Meal, MealType } from '#/core/planning/meal/entities/meal.entity';
import { DateRange } from '#/core/planning/meal/value-objects/time-range';

interface PlannedMeal {
  id: string;
  date: Date;
  nbPortions: number;
  mealType: string;
  recipe: {
    id: string;
    name: string;
    illustrationUrl: null | string;
  };
}

interface ShoppableMeal {
  nbPortions: number;
  recipe: {
    nbPortions: number;
    ingredients: {
      quantity: number;
      ingredient: {
        id: string;
        isStoredInQuantity: boolean;
        unit: {
          code: string;
        };
      };
    }[];
  };
}

export type GetPlannedMealsQueryResult = PlannedMeal[];
export type FindPlannedMealByIdQueryResult = PlannedMeal;
export type GetShoppableMealsQueryResult = ShoppableMeal[];

export abstract class MealReadRepository {
  public abstract doesExist(houseId: string, date: Date, mealType: MealType): Promise<boolean>;

  public abstract findById(id: { mealId: string; houseId: string }): Promise<FindPlannedMealByIdQueryResult>;

  public abstract findEntityById(id: { mealId: string; houseId: string }): Promise<Meal>;

  public abstract findEntityByTimeslot(timeSlot: {
    houseId: string;
    date: Date;
    mealType: MealType;
  }): Promise<Meal | null>;

  public abstract getPlannedMeals(houseId: string, dateRange: DateRange): Promise<GetPlannedMealsQueryResult>;

  public abstract getShoppableMeals(houseId: string, mealIds: string[]): Promise<GetShoppableMealsQueryResult>;
}
