export class AcceptIngredientSuggestionCommand {
  public constructor(
    public readonly ingredientId: string,
    public readonly shoppingListId: string,
    public readonly houseId: string,
  ) {}
}
