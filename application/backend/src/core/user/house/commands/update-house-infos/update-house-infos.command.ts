export class UpdateHouseInfosCommand {
  public constructor(
    public readonly houseId: string,
    public readonly name: string,
    public readonly defaultNbPortions: number,
  ) {}
}
