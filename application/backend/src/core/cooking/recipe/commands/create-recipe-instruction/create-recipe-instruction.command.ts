export class CreateRecipeInstructionCommand {
  public constructor(
    public readonly id: string,
    public readonly recipeId: string,
    public readonly houseId: string,
    public readonly order: number,
    public readonly text: string,
    public readonly timerNbMinutes: number,
  ) {}
}
