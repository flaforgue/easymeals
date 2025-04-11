import { IsNotEmpty, IsString } from 'class-validator';
import { FindShoppingListQuery } from '#/shared';

export class FindShoppingListDto implements FindShoppingListQuery {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
