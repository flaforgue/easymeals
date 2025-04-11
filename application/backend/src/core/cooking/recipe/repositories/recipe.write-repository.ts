import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';

export abstract class RecipeWriteRepository {
  public abstract create(recipe: Recipe): Promise<void>;

  public abstract update(recipe: Recipe): Promise<void>;

  public abstract updateNbPortions(recipe: Recipe): Promise<void>;

  public abstract delete(id: { recipeId: string; houseId: string }): Promise<void>;
}
