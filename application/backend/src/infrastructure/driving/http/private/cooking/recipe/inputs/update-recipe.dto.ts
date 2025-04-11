import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator';
import { RECIPE_MAX_TOTAL_TIME, UpdateRecipeCommand } from '#/shared';

export class UpdateRecipeDto implements UpdateRecipeCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty({ message: 'Le nom de votre recette ne peut pas être vide' })
  public readonly name: string = '';

  @IsOptional()
  @IsUrl(
    {
      protocols: ['https'],
      require_protocol: true,
    },
    { message: "L'illustration est invalide" },
  )
  public readonly illustrationUrl: null | string = null;

  @IsInt()
  @Min(0)
  @Max(RECIPE_MAX_TOTAL_TIME)
  public readonly preparationTimeInMinutes: number = 0;

  @IsInt()
  @Min(0)
  @Max(RECIPE_MAX_TOTAL_TIME)
  public readonly totalTimeInMinutes: number = 0;

  @IsBoolean()
  public readonly isVegetarian: boolean = false;

  @IsString()
  public readonly cuisineTypeId: string = '';
}
