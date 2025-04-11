import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';

export abstract class IngredientWriteRepository {
  public abstract create(ingredient: Ingredient): Promise<void>;

  public abstract createMany(ingredients: Ingredient[]): Promise<void>;

  public abstract delete(id: { houseId: string; ingredientId: string }): Promise<void>;

  public abstract update(ingredient: Ingredient): Promise<void>;
}
