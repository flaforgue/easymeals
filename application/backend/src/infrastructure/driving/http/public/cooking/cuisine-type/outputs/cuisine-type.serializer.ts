import { CuisineType } from '#/shared';
import { Injectable } from '@nestjs/common';
import { CuisineType as PrismaCuisineType } from '#/prisma/client';
import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';

@Injectable()
export class CuisineTypeSerializer extends BaseSerializer<PrismaCuisineType, CuisineType> {
  public serialize(cuisineType: PrismaCuisineType): CuisineType {
    return {
      id: cuisineType.id,
      name: cuisineType.name,
      illustrationUrl: cuisineType.illustrationUrl,
    };
  }
}
