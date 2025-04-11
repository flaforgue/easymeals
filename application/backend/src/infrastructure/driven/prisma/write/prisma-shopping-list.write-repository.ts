import { ShoppingList } from '#/core/shopping/shopping-list/entities/shopping-list.entity';
import { ShoppingListWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListWriteRepository implements ShoppingListWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(shoppingList: ShoppingList): Promise<void> {
    await this.prisma.shoppingList.create({
      data: {
        id: shoppingList.id,
        name: shoppingList.name,
        houseId: shoppingList.houseId,
      },
    });

    return;
  }

  public async updateName(shoppingList: ShoppingList): Promise<void> {
    await this.prisma.shoppingList.update({
      where: {
        id: shoppingList.id,
        houseId: shoppingList.houseId,
      },
      data: {
        name: shoppingList.name,
      },
    });

    return;
  }

  public async delete(id: { houseId: string; shoppingListId: string }): Promise<void> {
    await this.prisma.shoppingList.delete({
      where: {
        id: id.shoppingListId,
        houseId: id.houseId,
      },
    });

    return;
  }
}
