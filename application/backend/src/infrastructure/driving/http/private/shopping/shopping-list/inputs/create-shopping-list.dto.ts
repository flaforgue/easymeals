import { IsNotEmpty, IsString } from 'class-validator';
import { CreateShoppingListCommand } from '#/shared';

export class CreateShoppingListDto implements CreateShoppingListCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';
}
