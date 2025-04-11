import { ShoppingListIngredientSuggestion } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient-suggestion.entity';

export abstract class ShoppingListIngredientSuggestionWriteRepository {
  public abstract addManyIngredientSuggestionsToShoppingList(
    shopplingListSuggestions: ShoppingListIngredientSuggestion[],
  ): Promise<void>;

  public abstract delete(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void>;

  public abstract deleteIfExist(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void>;
}
