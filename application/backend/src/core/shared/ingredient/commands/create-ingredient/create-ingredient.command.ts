export class CreateIngredientCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly name: string,
    public readonly unitId: string,
    public readonly ingredientCategoryId: string,
  ) {}
}
