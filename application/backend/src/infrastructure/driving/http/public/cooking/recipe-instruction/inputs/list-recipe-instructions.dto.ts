import { IsNotEmpty, IsString } from 'class-validator';
import { ListRecipeInstructionsQuery } from '#/shared';

export class ListRecipeInstructionsDto implements ListRecipeInstructionsQuery {
  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';
}
