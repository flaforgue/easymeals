import { UpdateUserHouseCommand } from '#/shared';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateUserHouseDto implements UpdateUserHouseCommand {
  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';

  @IsInt()
  @Min(0)
  public readonly defaultNbPortions: number = 0;
}
