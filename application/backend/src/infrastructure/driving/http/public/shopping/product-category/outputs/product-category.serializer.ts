import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { ProductCategory } from '#/shared';
import { Injectable } from '@nestjs/common';
import { ProductCategory as PrismaProductCategory } from '#/prisma/client';

@Injectable()
export class ProductCategorySerializer extends BaseSerializer<PrismaProductCategory, ProductCategory> {
  public serialize(productCategory: PrismaProductCategory): ProductCategory {
    return {
      id: productCategory.id,
      name: productCategory.name,
      illustrationUrl: productCategory.illustrationUrl,
    };
  }
}
