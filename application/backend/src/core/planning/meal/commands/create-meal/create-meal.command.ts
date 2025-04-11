export class CreateMealCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly date: Date,
    public readonly mealType: string,
    public readonly recipeId: string,
    public readonly nbPortions: number,
  ) {}
}
