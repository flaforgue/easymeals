export class UpdateMealCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly recipeId: string,
    public readonly nbPortions: number,
  ) {}
}
