import { ProductReadRepository } from '#/core/shopping/product/repositories/product.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Product } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductReadRepository implements ProductReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getFromFilters(filters: {
    houseId: string;
    onlyUserContent: boolean;
    productCategoryId: null | string;
    search: string;
  }): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        ...(filters.onlyUserContent === false ? {} : { houseId: filters.houseId }),
        ...(filters.productCategoryId === null ? {} : { productCategoryId: filters.productCategoryId }),
        ...(filters.search === ''
          ? {}
          : {
              name: {
                contains: filters.search,
                mode: 'insensitive',
              },
            }),
        OR: [{ houseId: null }, { houseId: filters.houseId }],
      },
      orderBy: [
        {
          productCategoryId: 'asc',
        },
        {
          name: 'asc',
        },
      ],
    });
  }

  public async doesNameExistForHouse(name: string, houseId: string): Promise<boolean> {
    const productWithSameName = await this.prisma.product.findFirst({
      select: {
        id: true,
      },
      where: {
        name: name,
        OR: [{ houseId: null }, { houseId: houseId }],
      },
    });

    return productWithSameName !== null;
  }
}
