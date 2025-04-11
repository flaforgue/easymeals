import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';

export abstract class RecipeIngredientWriteRepository {
  public abstract createMany(recipeIngredients: RecipeIngredient[]): Promise<void>;

  public abstract addIngredientToRecipe(recipeIngredient: RecipeIngredient): Promise<void>;

  public abstract updateQuantity(recipeIngredient: RecipeIngredient): Promise<void>;

  public abstract delete(id: { recipeId: string; ingredientId: string; houseId: string }): Promise<void>;
}
