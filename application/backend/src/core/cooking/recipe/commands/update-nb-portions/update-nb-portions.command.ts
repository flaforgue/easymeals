export class UpdateNbPortionsCommand {
  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    public readonly nbPortions: number,
  ) {}
}
