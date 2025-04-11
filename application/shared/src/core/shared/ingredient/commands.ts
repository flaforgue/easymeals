export interface CreateIngredientCommand {
  id: string;
  name: string;
  unitId: string;
  ingredientCategoryId: string;
}

export interface UpdateIngredientCommand {
  id: string;
  name: string;
  unitId: string;
  ingredientCategoryId: string;
}

export interface DeleteIngredientCommand {
  id: string;
}
