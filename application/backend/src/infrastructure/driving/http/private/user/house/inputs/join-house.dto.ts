import { JoinHouseCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class JoinHouseDto implements JoinHouseCommand {
  @IsString()
  @IsNotEmpty()
  public readonly joinKey: string = '';
}
