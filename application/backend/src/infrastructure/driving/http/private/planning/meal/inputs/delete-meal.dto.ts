import { IsNotEmpty, IsString } from 'class-validator';
import { DeleteMealCommand } from '#/shared';

export class DeleteMealDto implements DeleteMealCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
