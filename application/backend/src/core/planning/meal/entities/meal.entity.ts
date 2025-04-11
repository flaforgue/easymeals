import { ValidationException } from '#/core/generic/validation/validation.exception';

export type MealType = 'lunch' | 'dinner';

export class Meal {
  private _date!: Date;
  private _mealType!: MealType;
  private _nbPortions!: number;

  public constructor(
    public readonly id: string,
    public readonly houseId: string,
    date: Date,
    mealType: string,
    public recipeId: string,
    nbPortions: number,
  ) {
    this.date = date;
    this.mealType = mealType;
    this.nbPortions = nbPortions;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(value: Date) {
    const dateAtMidnight = new Date(value);
    dateAtMidnight.setUTCHours(0, 0, 0, 0);

    this._date = dateAtMidnight;
  }

  public get mealType(): MealType {
    return this._mealType;
  }

  public set mealType(value: string) {
    if (value !== 'lunch' && value !== 'dinner') {
      throw new ValidationException(`Invalid meal type given: ${value}`);
    }

    this._mealType = value;
  }

  public get nbPortions(): number {
    return this._nbPortions;
  }

  public set nbPortions(value: number) {
    if (value < 1) {
      throw new ValidationException('Le nombre de portions doit être 1 ou plus');
    }

    this._nbPortions = value;
  }
}
