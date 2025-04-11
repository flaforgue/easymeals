import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteRecipeInstructionCommand } from '#/shared';

export class DeleteRecipeInstructionDto implements DeleteRecipeInstructionCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
