export class RenameShoppingListCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly name: string,
  ) {}
}
