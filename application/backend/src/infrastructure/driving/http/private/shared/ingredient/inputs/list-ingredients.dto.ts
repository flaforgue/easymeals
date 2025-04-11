import { castToBoolean, castToNullOrString } from '#/infrastructure/driving/http/query-string.utils';
import { ListIngredientsQuery } from '#/shared';
import { Transform } from 'class-transformer';
import { IsBoolean, IsString, ValidateIf } from 'class-validator';

export class ListIngredientsDto implements ListIngredientsQuery {
  @IsString()
  public readonly search: string = '';

  @IsString()
  @Transform(castToNullOrString)
  @ValidateIf((_object, value) => value !== null)
  public readonly ingredientCategoryId: null | string = null;

  @IsString()
  @Transform(castToNullOrString)
  @ValidateIf((_object, value) => value !== null)
  public readonly unitId: null | string = null;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly onlyUserContent: boolean = false;
}
