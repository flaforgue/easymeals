export class CreateRecipeCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly name: string,
    public readonly illustrationUrl: null | string,
    public readonly preparationTimeInMinutes: number,
    public readonly totalTimeInMinutes: number,
    public readonly isVegetarian: boolean,
    public readonly cuisineTypeId: string,
  ) {}
}
