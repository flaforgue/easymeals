import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';
import { Recipe as PrismaRecipe } from '#/prisma/client';

export abstract class RecipeReadRepository {
  public abstract findById(recipeId: string): Promise<PrismaRecipe>;

  public abstract findEntityById(id: { id: string; houseId: string }): Promise<Recipe>;

  public abstract getPublicFromFilters(filters: {
    search: string;
    isVegetarian: boolean;
    isFast: boolean;
    cuisineTypeId: string | null;
  }): Promise<PrismaRecipe[]>;

  public abstract getFromFilters(
    userId: string,
    houseId: string,
    filters: {
      search: string;
      isVegetarian: boolean;
      isFast: boolean;
      cuisineTypeId: string | null;
      isBookmark: boolean;
      isUserContent: boolean;
    },
  ): Promise<PrismaRecipe[]>;
}
