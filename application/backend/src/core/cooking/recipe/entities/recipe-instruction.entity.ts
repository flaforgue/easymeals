import { ValidationException } from '#/core/generic/validation/validation.exception';

export class RecipeInstruction {
  private _timerNbMinutes!: number;

  public constructor(
    public readonly id: string,
    public readonly recipeId: string,
    public readonly houseId: string,
    public readonly order: number,
    public text: string,
    timerNbMinutes: number,
  ) {
    this.timerNbMinutes = timerNbMinutes;

    if (order < 0) {
      throw new ValidationException("L'ordre ne peut pas être négatif");
    }
  }

  public set timerNbMinutes(value: number) {
    if (value < 0) {
      throw new ValidationException('Le temps du minuteur doit être supérieur à 0');
    }

    this._timerNbMinutes = value;
  }

  public get timerNbMinutes(): number {
    return this._timerNbMinutes;
  }
}
