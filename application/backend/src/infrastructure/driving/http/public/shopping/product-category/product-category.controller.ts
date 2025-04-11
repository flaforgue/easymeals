import { Controller, Get, HttpCode } from '@nestjs/common';
import { ProductCategory } from '#/shared';
import { ProductCategorySerializer } from '#/infrastructure/driving/http/public/shopping/product-category/outputs/product-category.serializer';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { ProductCategoryReadRepository } from '#/core/shopping/product-category/repositories/product-category.read-repository';

@Controller('public/shopping/product-category')
export class ProductCategoryController extends PublicBaseController {
  public constructor(
    private readonly productCategoryReadRepository: ProductCategoryReadRepository,
    private readonly productCategorySerializer: ProductCategorySerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(): Promise<ProductCategory[]> {
    const productCategories = await this.productCategoryReadRepository.getAll();

    return this.productCategorySerializer.serializeMany(productCategories);
  }
}
