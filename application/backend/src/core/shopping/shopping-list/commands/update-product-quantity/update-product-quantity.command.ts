export class UpdateProductQuantityCommand {
  public constructor(
    public readonly productId: string,
    public readonly quantity: number,
    public readonly shoppingListId: string,
    public readonly houseId: string,
  ) {}
}
