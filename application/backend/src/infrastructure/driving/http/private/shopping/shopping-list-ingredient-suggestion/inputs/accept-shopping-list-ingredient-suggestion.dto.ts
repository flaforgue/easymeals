import { IsNotEmpty, IsString } from 'class-validator';
import { AcceptShoppingListIngredientSuggestionCommand } from '#/shared';

export class AcceptShoppingListIngredientSuggestionDto implements AcceptShoppingListIngredientSuggestionCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';
}
