import { castToBoolean, castToNullOrString } from '#/infrastructure/driving/http/query-string.utils';
import { ListProductsQuery } from '#/shared';
import { Transform } from 'class-transformer';
import { IsBoolean, IsString, ValidateIf } from 'class-validator';

export class ListProductsDto implements ListProductsQuery {
  @IsString()
  public readonly search: string = '';

  @IsString()
  @Transform(castToNullOrString)
  @ValidateIf((_object, value) => value !== null)
  public readonly productCategoryId: null | string = null;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly onlyUserContent: boolean = false;
}
