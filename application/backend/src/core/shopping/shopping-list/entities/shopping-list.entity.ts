import { capitalizeFirstLetter } from '#/core/generic/utils/string';

export class ShoppingList {
  private _name!: string;

  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    name: string,
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
