import { IsNotEmpty, IsString } from 'class-validator';
import { ListRecipeIngredientQuery } from '#/shared';

export class ListRecipeIngredientsDto implements ListRecipeIngredientQuery {
  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';
}
