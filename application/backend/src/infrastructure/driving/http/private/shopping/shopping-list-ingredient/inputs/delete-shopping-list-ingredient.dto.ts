import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteShoppingListIngredientCommand } from '#/shared';

export class DeleteShoppingListIngredientDto implements DeleteShoppingListIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';
}
