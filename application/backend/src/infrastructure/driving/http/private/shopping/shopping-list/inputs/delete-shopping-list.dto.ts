import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteShoppingListCommand } from '#/shared';

export class DeleteShoppingListDto implements DeleteShoppingListCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
