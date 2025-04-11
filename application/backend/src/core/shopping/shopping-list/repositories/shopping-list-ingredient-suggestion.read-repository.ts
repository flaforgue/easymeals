export abstract class ShoppingListIngredientSuggestionReadRepository {
  public abstract findQuantityById(id: {
    ingredientId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<number>;
}
