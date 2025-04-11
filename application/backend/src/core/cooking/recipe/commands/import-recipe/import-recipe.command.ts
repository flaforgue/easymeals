export class ImportRecipeCommand {
  public constructor(
    public readonly recipeToImportId: string,
    public readonly recipeToCreateId: string,
    public readonly destinationHouseId: string,
  ) {}
}
