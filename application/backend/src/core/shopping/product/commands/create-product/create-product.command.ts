export class CreateProductCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly name: string,
    public readonly productCategoryId: string,
  ) {}
}
