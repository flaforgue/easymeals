import { capitalizeFirstLetter } from '#/core/generic/utils/string';

export class Ingredient {
  private _name!: string;

  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    name: string,
    public unitId: string,
    public ingredientCategoryId: string,
  ) {
    this.name = name;
  }

  public set name(value: string) {
    this._name = capitalizeFirstLetter(value);
  }

  public get name(): string {
    return this._name;
  }
}
