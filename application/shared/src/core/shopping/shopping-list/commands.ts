export interface CreateShoppingListCommand {
  id: string;
  name: string;
}

export interface AddMealsToShoppingListCommand {
  shoppingListId: string;
  mealIds: string[];
}

export interface UpdateShoppingListCommand {
  id: string;
  name: string;
}

export interface DeleteShoppingListCommand {
  id: string;
}

export interface DeleteShoppingListIngredientCommand {
  ingredientId: string;
  shoppingListId: string;
}

export interface AcceptShoppingListIngredientSuggestionCommand {
  ingredientId: string;
  shoppingListId: string;
}

export interface DeleteShoppingListIngredientSuggestionCommand {
  ingredientId: string;
  shoppingListId: string;
}

export interface CreateShoppingListIngredientCommand {
  ingredientId: string;
  shoppingListId: string;
  quantity: number;
}

export interface UpdateShoppingListIngredientCommand {
  ingredientId: string;
  shoppingListId: string;
  quantity: number;
}

export interface CheckShoppingListIngredientCommand {
  ingredientId: string;
  shoppingListId: string;
  isChecked: boolean;
}

export interface DeleteShoppingListProductCommand {
  productId: string;
  shoppingListId: string;
}

export interface CreateShoppingListProductCommand {
  productId: string;
  shoppingListId: string;
  quantity: number;
}

export interface UpdateShoppingListProductCommand {
  productId: string;
  shoppingListId: string;
  quantity: number;
}

export interface CheckShoppingListProductCommand {
  productId: string;
  shoppingListId: string;
  isChecked: boolean;
}
