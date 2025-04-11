export class CreateShoppingListCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly name: string,
  ) {}
}
