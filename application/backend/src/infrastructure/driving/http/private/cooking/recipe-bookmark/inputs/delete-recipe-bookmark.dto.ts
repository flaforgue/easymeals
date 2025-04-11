import { DeleteRecipeBookmarkCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteRecipeBookmarkDto implements DeleteRecipeBookmarkCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
