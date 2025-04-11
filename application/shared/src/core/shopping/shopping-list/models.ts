import { QuantifiedIngredient } from '../../shared/ingredient';
import { QuantifiedProduct } from '../product';

export interface SuggestedIngredient {
  ingredientId: string;
  ingredientName: string;
  quantity: number;
  unitAbbreviation: string;
  unitName: string;
}

export interface CheckedQuantifiedIngredient extends QuantifiedIngredient {
  isChecked: boolean;
}

export interface CheckedQuantifiedProduct extends QuantifiedProduct {
  isChecked: boolean;
}

export interface ShoppingList {
  id: string;
  name: string;
  ingredients: CheckedQuantifiedIngredient[];
  products: CheckedQuantifiedProduct[];
  ingredientSuggestions: SuggestedIngredient[];
}
