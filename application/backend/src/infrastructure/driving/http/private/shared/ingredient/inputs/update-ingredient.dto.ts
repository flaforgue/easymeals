import { UpdateIngredientCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateIngredientDto implements UpdateIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly unitId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly ingredientCategoryId: string = '';
}
