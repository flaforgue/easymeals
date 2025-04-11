import { IsInt, Min } from 'class-validator';
import { ListShoppingListsQuery } from '#/shared';
import { Transform } from 'class-transformer';
import { castToNumber } from '#/infrastructure/driving/http/query-string.utils';

export class ListShoppingListsDto implements ListShoppingListsQuery {
  @IsInt()
  @Min(1)
  @Transform(castToNumber)
  public readonly page: number = 1;
}
