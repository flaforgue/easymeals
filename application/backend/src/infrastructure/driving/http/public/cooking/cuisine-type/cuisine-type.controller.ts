import { Controller, Get, HttpCode } from '@nestjs/common';
import { CuisineType } from '#/shared';
import { CuisineTypeSerializer } from '#/infrastructure/driving/http/public/cooking/cuisine-type/outputs/cuisine-type.serializer';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { CuisineTypeReadRepository } from '#/core/cooking/cuisine-type/repositories/cuisine-type.read-repository';

@Controller('public/cooking/cuisine-type')
export class CuisineTypeController extends PublicBaseController {
  public constructor(
    private readonly cuisineTypeReadRepository: CuisineTypeReadRepository,
    private readonly cuisineTypeSerializer: CuisineTypeSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(): Promise<CuisineType[]> {
    const cuisineTypes = await this.cuisineTypeReadRepository.getAll();

    return this.cuisineTypeSerializer.serializeMany(cuisineTypes);
  }
}
