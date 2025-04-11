import { DeleteIngredientCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteIngredientDto implements DeleteIngredientCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
