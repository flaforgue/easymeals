import { CreateRecipeBookmarkCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeBookmarkDto implements CreateRecipeBookmarkCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
