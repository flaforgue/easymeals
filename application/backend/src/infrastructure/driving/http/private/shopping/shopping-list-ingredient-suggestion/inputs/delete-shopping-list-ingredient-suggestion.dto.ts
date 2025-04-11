import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteShoppingListIngredientSuggestionCommand } from '#/shared';

export class DeleteShoppingListIngredientSuggestionDto implements DeleteShoppingListIngredientSuggestionCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';
}
