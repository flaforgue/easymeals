import { IsNotEmpty, IsString } from 'class-validator';
import { FindRecipeQuery } from '#/shared';

export class FindRecipeDto implements FindRecipeQuery {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
