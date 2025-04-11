import { UnitCode } from '../unit';

export interface Ingredient {
  id: string;
  name: string;
  unit: {
    id: string;
    abbreviation: string;
    name: string;
  };
  ingredientCategoryId: string;
  isUserContent: boolean;
}

export interface QuantifiedIngredient {
  id: string;
  name: string;
  quantity: number;
  unitAbbreviation: string;
  unitName: string;
  unitCode: UnitCode;
  ingredientCategoryId: string;
}
