import { CreateIngredientCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredientDto implements CreateIngredientCommand {
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
