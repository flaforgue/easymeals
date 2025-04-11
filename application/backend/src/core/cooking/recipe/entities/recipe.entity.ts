import { capitalizeFirstLetter } from '#/core/generic/utils/string';
import { ValidationException } from '#/core/generic/validation/validation.exception';

export class Recipe {
  private _name!: string;
  private _preparationTimeInMinutes!: number;
  private _totalTimeInMinutes!: number;
  private _nbPortions!: number;

  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    name: string,
    nbPortions: number,
    preparationTimeInMinutes: number,
    totalTimeInMinutes: number,
    public cuisineTypeId: string,
    public isVegetarian: boolean,
    public illustrationUrl: null | string,
  ) {
    this.name = name;
    this.preparationTimeInMinutes = preparationTimeInMinutes;
    this.totalTimeInMinutes = totalTimeInMinutes;
    this.nbPortions = nbPortions;
  }

  public set name(value: string) {
    this._name = capitalizeFirstLetter(value);
  }

  public get name(): string {
    return this._name;
  }

  public set preparationTimeInMinutes(value: number) {
    if (value < 1) {
      throw new ValidationException('Le temps de préparation doit être de 1 minute ou plus');
    }

    if (value > 1440) {
      throw new ValidationException('Le temps de préparation doit être inférieur à 24 heures');
    }

    this._preparationTimeInMinutes = value;
  }

  public get preparationTimeInMinutes(): number {
    return this._preparationTimeInMinutes;
  }

  public set totalTimeInMinutes(value: number) {
    if (value < this.preparationTimeInMinutes) {
      throw new ValidationException('Le temps total doit être égal ou supérieur au temps de préparation');
    }

    if (value > 1440) {
      throw new ValidationException('Le temps total doit être inférieur à 24 heures');
    }

    this._totalTimeInMinutes = value;
  }

  public get totalTimeInMinutes(): number {
    return this._totalTimeInMinutes;
  }

  public set nbPortions(value: number) {
    if (value < 1) {
      throw new ValidationException('Le nombre de portions doit être 1 ou plus');
    }

    this._nbPortions = value;
  }

  public get nbPortions(): number {
    return this._nbPortions;
  }
}
