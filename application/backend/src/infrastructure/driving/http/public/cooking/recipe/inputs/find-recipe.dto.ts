import { IsNotEmpty, IsString } from 'class-validator';
import { FindPublicRecipeQuery } from '#/shared';

export class FindRecipeDto implements FindPublicRecipeQuery {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
