import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Product } from '#/shared';
import { Injectable } from '@nestjs/common';
import { Product as PrismaProduct } from '#/prisma/client';

@Injectable()
export class ProductSerializer extends BaseSerializer<PrismaProduct, Product> {
  public serialize(product: PrismaProduct): Product {
    return {
      id: product.id,
      name: product.name,
      productCategoryId: product.productCategoryId,
      isUserContent: product.houseId !== null,
    };
  }
}
