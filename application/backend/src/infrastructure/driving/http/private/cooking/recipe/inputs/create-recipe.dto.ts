import { CreateRecipeCommand, RECIPE_MAX_TOTAL_TIME } from '#/shared';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator';

export class CreateRecipeDto implements CreateRecipeCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty({ message: 'Donnez un nom à votre recette' })
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
