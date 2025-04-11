import { CheckShoppingListIngredientCommand } from '#/shared';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CheckShoppingListIngredientDto implements CheckShoppingListIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';

  @IsBoolean()
  public readonly isChecked: boolean = false;
}
