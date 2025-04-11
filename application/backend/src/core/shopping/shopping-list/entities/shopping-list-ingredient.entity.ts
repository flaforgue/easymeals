import { ValidationException } from '#/core/generic/validation/validation.exception';

export class ShoppingListIngredient {
  private _quantity!: number;

  public constructor(
    public readonly ingredientId: string,
    quantity: number,
    public readonly shoppingListId: string,
    public readonly houseId: string,
  ) {
    this.quantity = quantity;
  }

  public set quantity(value: number) {
    if (value <= 0) {
      throw new ValidationException('La quantité doit être supérieure à 0');
    }

    this._quantity = value;
  }

  public get quantity(): number {
    return this._quantity;
  }
}
