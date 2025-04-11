import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { CreateRecipeIngredientCommand } from '#/shared';

export class CreateRecipeIngredientDto implements CreateRecipeIngredientCommand {
  @IsString()
  @IsNotEmpty({ message: 'Recette introuvable' })
  public readonly recipeId: string = '';

  @IsString()
  @IsNotEmpty({ message: 'Ingrédient introuvable' })
  public readonly ingredientId: string = '';

  @IsNumber({ maxDecimalPlaces: 3 }, { message: 'La quantité doit être un nombre' })
  @Min(0)
  public readonly quantity: number = 0;
}
