import { IsNotEmpty, IsString } from 'class-validator';
import { FindHouseByJoinKeyQuery } from '#/shared';

export class FindHouseByJoinKeyDto implements FindHouseByJoinKeyQuery {
  @IsString()
  @IsNotEmpty()
  public readonly joinKey: string = '';
}
