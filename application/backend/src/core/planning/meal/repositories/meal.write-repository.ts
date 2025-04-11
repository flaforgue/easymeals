import { Meal } from '#/core/planning/meal/entities/meal.entity';

export abstract class MealWriteRepository {
  public abstract create(meal: Meal): Promise<void>;

  public abstract update(meal: Meal): Promise<void>;

  public abstract delete(id: { mealId: string; houseId: string }): Promise<void>;
}
