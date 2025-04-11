import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { MoveMealCommand } from '#/shared';
import { castToDate } from '#/infrastructure/driving/http/query-string.utils';
import { Transform } from 'class-transformer';

export class MoveMealDto implements MoveMealCommand {
  @IsString()
  @IsNotEmpty()
  public readonly mealId: string = '';

  @IsDate()
  @Transform(castToDate)
  public readonly newDate: Date = new Date();

  @IsString()
  @IsNotEmpty()
  public readonly newMealType: string = '';
}
