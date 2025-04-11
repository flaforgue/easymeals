import { IsNotEmpty, IsString } from 'class-validator';
import { ImportRecipeCommand } from '#/shared';

export class ImportRecipeDto implements ImportRecipeCommand {
  @IsString()
  @IsNotEmpty()
  public readonly recipeToImportId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly recipeToCreateId: string = '';
}
