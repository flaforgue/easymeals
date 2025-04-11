import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteRecipeCommand } from '#/shared';

export class DeleteRecipeDto implements DeleteRecipeCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
