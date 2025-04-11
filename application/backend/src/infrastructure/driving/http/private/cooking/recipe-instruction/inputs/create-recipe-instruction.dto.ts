import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { CreateRecipeInstructionCommand } from '#/shared';

export class CreateRecipeInstructionDto implements CreateRecipeInstructionCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';

  @IsString()
  public readonly text: string = '';

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  public readonly timerNbMinutes: number = 0;

  @IsInt()
  @Min(0)
  public readonly order: number = 0;
}
