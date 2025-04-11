import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import { Ingredient as PrismaIngredient } from '#/prisma/client';

export interface IngredientWithUnit {
  id: string;
  name: string;
  unit: {
    id: string;
    abbreviation: string;
    name: string;
  };
  isStoredInQuantity: boolean;
  ingredientCategoryId: string;
  houseId: string | null;
}

export abstract class IngredientReadRepository {
  public abstract getFromFilters(filters: {
    houseId: string;
    onlyUserContent: boolean;
    ingredientCategoryId: string | null;
    unitId: string | null;
    search: string;
  }): Promise<IngredientWithUnit[]>;

  public abstract doesExist(ingredient: Ingredient): Promise<boolean>;

  public abstract getCustomByNames(houseId: string, names: string[]): Promise<PrismaIngredient[]>;
}
