import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteRecipeIngredientCommand } from '#/shared';

export class DeleteRecipeIngredientDto implements DeleteRecipeIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly ingredientId: string = '';
}
