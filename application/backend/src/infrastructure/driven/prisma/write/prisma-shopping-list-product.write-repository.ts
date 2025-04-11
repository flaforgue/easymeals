import { ShoppingListProduct } from '#/core/shopping/shopping-list/entities/shopping-list-product.entity';
import { ShoppingListProductWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListProductWriteRepository implements ShoppingListProductWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async addProductToShoppingList(shoppingListProduct: ShoppingListProduct): Promise<void> {
    await this.prisma.shoppingListProductPivot.upsert({
      where: {
        shoppingListId_productId: {
          shoppingListId: shoppingListProduct.shoppingListId,
          productId: shoppingListProduct.productId,
        },
        shoppingList: {
          houseId: shoppingListProduct.houseId,
        },
      },
      create: {
        quantity: shoppingListProduct.quantity,
        product: {
          connect: {
            id: shoppingListProduct.productId,
            OR: [{ houseId: null }, { houseId: shoppingListProduct.houseId }],
          },
        },
        shoppingList: {
          connect: {
            id: shoppingListProduct.shoppingListId,
            houseId: shoppingListProduct.houseId,
          },
        },
      },
      update: {
        quantity: {
          increment: shoppingListProduct.quantity,
        },
      },
    });

    return;
  }

  public async delete(id: { shoppingListId: string; productId: string; houseId: string }): Promise<void> {
    await this.prisma.shoppingListProductPivot.delete({
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

    return;
  }

  public async updateQuantity(shoppingListProduct: ShoppingListProduct): Promise<void> {
    await this.prisma.shoppingListProductPivot.update({
      where: {
        shoppingListId_productId: {
          shoppingListId: shoppingListProduct.shoppingListId,
          productId: shoppingListProduct.productId,
        },
        shoppingList: {
          houseId: shoppingListProduct.houseId,
        },
      },
      data: {
        quantity: shoppingListProduct.quantity,
      },
    });

    return;
  }

  public async updateCheckState(
    id: {
      shoppingListId: string;
      productId: string;
      houseId: string;
    },
    isChecked: boolean,
  ): Promise<void> {
    await this.prisma.shoppingListProductPivot.update({
      data: {
        isChecked: isChecked,
      },
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

    return;
  }
}
