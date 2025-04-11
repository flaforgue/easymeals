export class AddIngredientToShoppingListCommand {
  public constructor(
    public readonly ingredientId: string,
    public readonly quantity: number,
    public readonly shoppingListId: string,
    public readonly houseId: string,
  ) {}
}
