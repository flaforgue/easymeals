import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { UpdateNbPortionsCommand } from '#/shared';

export class UpdateNbPortionsDto implements UpdateNbPortionsCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsInt()
  @Min(1)
  public readonly nbPortions: number = 1;
}
