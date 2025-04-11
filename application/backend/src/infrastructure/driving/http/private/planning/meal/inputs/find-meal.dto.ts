import { IsNotEmpty, IsString } from 'class-validator';
import { FindMealQuery } from '#/shared';

export class FindMealDto implements FindMealQuery {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
