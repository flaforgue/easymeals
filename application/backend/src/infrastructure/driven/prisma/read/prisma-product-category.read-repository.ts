import { ProductCategoryReadRepository } from '#/core/shopping/product-category/repositories/product-category.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { ProductCategory } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductCategoryReadRepository implements ProductCategoryReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getAll(): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
