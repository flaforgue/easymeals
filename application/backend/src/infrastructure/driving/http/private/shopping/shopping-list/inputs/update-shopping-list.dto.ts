import { IsNotEmpty, IsString } from 'class-validator';
import { UpdateShoppingListCommand } from '#/shared';

export class UpdateShoppingListDto implements UpdateShoppingListCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';
}
