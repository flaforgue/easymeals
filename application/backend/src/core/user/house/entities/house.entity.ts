import { capitalizeFirstLetter } from '#/core/generic/utils/string';
import { ValidationException } from '#/core/generic/validation/validation.exception';

export class House {
  private _name!: string;
  private _defaultNbPortions!: number;

  public constructor(
    public readonly id: string,
    name: string,
    defaultNbPortions: number,
  ) {
    this.name = name;
    this.defaultNbPortions = defaultNbPortions;
  }

  public set name(value: string) {
    this._name = capitalizeFirstLetter(value);
  }

  public get name(): string {
    return this._name;
  }

  public set defaultNbPortions(value: number) {
    if (value < 1) {
      throw new ValidationException('Le nombre de portions par défaut doit être 1 ou plus');
    }

    this._defaultNbPortions = value;
  }

  public get defaultNbPortions(): number {
    return this._defaultNbPortions;
  }
}
