import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';

export interface PrismaRecipeIngredient {
  recipeId: string;
  ingredientId: string;
  quantity: number;
  ingredient: {
    id: string;
    name: string;
    houseId: null | string;
    ingredientCategoryId: string;
    unit: {
      id: string;
      code: string;
      name: string;
      abbreviation: string;
    };
  };
}

export abstract class RecipeIngredientReadRepository {
  public abstract getByRecipeId(recipeId: string): Promise<PrismaRecipeIngredient[]>;

  public abstract findEntityById(id: {
    ingredientId: string;
    recipeId: string;
    houseId: string;
  }): Promise<RecipeIngredient>;
}
