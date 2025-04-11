import { IsDate } from 'class-validator';
import { ListMealsQuery } from '#/shared';
import { Transform } from 'class-transformer';
import { castToDate } from '#/infrastructure/driving/http/query-string.utils';

export class ListMealsDto implements ListMealsQuery {
  @IsDate()
  @Transform(castToDate)
  public readonly dateFrom: Date = new Date();

  @IsDate()
  @Transform(castToDate)
  public readonly dateTo: Date = new Date();
}
