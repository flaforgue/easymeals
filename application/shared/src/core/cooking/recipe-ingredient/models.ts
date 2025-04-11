import { UnitCode } from '../../shared/unit';

export interface RecipeIngredient {
  recipeId: string;
  quantity: number;
  ingredientId: string;
  ingredientName: string;
  ingredientCategoryId: string;
  unitId: string;
  unitAbbreviation: string;
  unitName: string;
  unitCode: UnitCode;
}
