export class MoveMealCommand {
  public constructor(
    public readonly houseId: string,
    public readonly mealId: string,
    public readonly newDate: Date,
    public readonly newMealType: string,
  ) {}
}
