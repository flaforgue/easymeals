import { Product } from '#/core/shopping/product/entities/product.entity';
import { ProductWriteRepository } from '#/core/shopping/product/repositories/product.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductWriteRepository implements ProductWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        id: product.id,
        houseId: product.houseId,
        name: product.name,
        productCategoryId: product.productCategoryId,
      },
    });

    return;
  }

  public async update(product: Product): Promise<void> {
    await this.prisma.product.update({
      where: {
        id: product.id,
        houseId: product.houseId,
      },
      data: {
        productCategoryId: product.productCategoryId,
        name: product.name,
      },
    });

    return;
  }

  public async delete(id: { houseId: string; productId: string }): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: id.productId,
        houseId: id.houseId,
      },
    });

    return;
  }
}
