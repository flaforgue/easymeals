import { CheckShoppingListProductCommand } from '#/shared';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CheckShoppingListProductDto implements CheckShoppingListProductCommand {
  @IsString()
  @IsNotEmpty()
  public readonly productId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';

  @IsBoolean()
  public readonly isChecked: boolean = false;
}
