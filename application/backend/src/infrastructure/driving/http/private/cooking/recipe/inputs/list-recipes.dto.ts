import { IsBoolean, IsString, ValidateIf } from 'class-validator';
import { castToBoolean, castToNullOrString } from '#/infrastructure/driving/http/query-string.utils';
import { ListRecipesQuery } from '#/shared';
import { Transform } from 'class-transformer';

export class ListRecipesDto implements ListRecipesQuery {
  @IsString()
  public readonly search: string = '';

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isVegetarian: boolean = false;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isFast: boolean = false;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isUserContent: boolean = false;

  @IsBoolean()
  @Transform(castToBoolean)
  public readonly isBookmark: boolean = false;

  @IsString()
  @Transform(castToNullOrString)
  @ValidateIf((_object, value) => value !== null)
  public readonly cuisineTypeId: null | string = null;
}
