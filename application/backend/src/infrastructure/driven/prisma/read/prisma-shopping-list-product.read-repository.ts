import { ShoppingListProduct } from '#/core/shopping/shopping-list/entities/shopping-list-product.entity';
import { ShoppingListProductReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListProductReadRepository implements ShoppingListProductReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async findEntityById(id: {
    productId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<ShoppingListProduct> {
    const prismaProduct = await this.prisma.shoppingListProductPivot.findUniqueOrThrow({
      where: {
        shoppingListId_productId: {
          shoppingListId: id.shoppingListId,
          productId: id.productId,
        },
        shoppingList: {
          houseId: id.houseId,
        },
      },
    });

    return new ShoppingListProduct(
      prismaProduct.productId,
      prismaProduct.quantity,
      prismaProduct.shoppingListId,
      id.houseId,
    );
  }
}
