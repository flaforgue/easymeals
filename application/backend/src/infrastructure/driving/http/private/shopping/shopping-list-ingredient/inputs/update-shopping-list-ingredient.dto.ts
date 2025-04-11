import { UpdateShoppingListIngredientCommand } from '#/shared';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateShoppingListIngredientDto implements UpdateShoppingListIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';

  @IsNumber({ maxDecimalPlaces: 3 }, { message: 'La quantité doit être un nombre' })
  @Min(0)
  public readonly quantity: number = 0;
}
