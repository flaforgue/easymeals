import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { UpdateRecipeInstructionCommand } from '#/shared';

export class UpdateRecipeInstructionDto implements UpdateRecipeInstructionCommand {
  @IsString()
  @IsNotEmpty({ message: 'Recette introuvable' })
  public readonly id: string = '';

  @IsString()
  public readonly text: string = '';

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  public readonly timerNbMinutes: number = 0;
}
