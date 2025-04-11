export interface CreateRecipeIngredientCommand {
  recipeId: string;
  ingredientId: string;
  quantity: number;
}

export interface UpdateRecipeIngredientCommand {
  recipeId: string;
  ingredientId: string;
  quantity: number;
}

export interface DeleteRecipeIngredientCommand {
  recipeId: string;
  ingredientId: string;
}
