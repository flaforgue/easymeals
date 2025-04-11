export class UpdateRecipeInstructionCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly text: string,
    public readonly timerNbMinutes: number,
  ) {}
}
