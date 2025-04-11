import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteShoppingListProductCommand } from '#/shared';

export class DeleteShoppingListProductDto implements DeleteShoppingListProductCommand {
  @IsString()
  @IsNotEmpty()
  public readonly productId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';
}
