import { IsBoolean, IsString, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
import { ListPublicRecipesQuery } from '#/shared';
import { castToBoolean, castToNullOrString } from '#/infrastructure/driving/http/query-string.utils';

export class ListRecipesDto implements ListPublicRecipesQuery {
  @IsString()
  public readonly search: string = '';

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isVegetarian: boolean = false;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isFast: boolean = false;

  @IsString()
  @Transform(castToNullOrString)
  @ValidateIf((_object, value) => value !== null)
  public readonly cuisineTypeId: null | string = null;
}
