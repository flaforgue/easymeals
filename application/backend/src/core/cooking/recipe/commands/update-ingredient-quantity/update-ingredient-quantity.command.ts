export class UpdateIngredientQuantityCommand {
  public constructor(
    public readonly ingredientId: string,
    public readonly recipeId: string,
    public readonly houseId: string,
    public readonly quantity: number,
  ) {}
}
