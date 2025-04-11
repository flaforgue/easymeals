export class AddMealsToShoppingListCommand {
  public constructor(
    public readonly shoppingListId: string,
    public readonly mealIds: string[],
    public readonly houseId: string,
  ) {}
}
