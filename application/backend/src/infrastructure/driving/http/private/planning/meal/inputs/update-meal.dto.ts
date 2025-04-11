import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { UpdateMealCommand } from '#/shared';

export class UpdateMealDto implements UpdateMealCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';

  @IsInt()
  @Min(1)
  public readonly nbPortions: number = 0;
}
