import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';
import { ShoppingListIngredientReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListIngredientReadRepository implements ShoppingListIngredientReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async findEntityById(id: {
    ingredientId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<ShoppingListIngredient> {
    const prismaShoppingListIngredient = await this.prisma.shoppingListIngredientPivot.findUniqueOrThrow({
      where: {
        shoppingListId_ingredientId: {
          ingredientId: id.ingredientId,
          shoppingListId: id.shoppingListId,
        },
        shoppingList: {
          houseId: id.houseId,
        },
      },
    });

    return new ShoppingListIngredient(
      prismaShoppingListIngredient.ingredientId,
      prismaShoppingListIngredient.quantity,
      prismaShoppingListIngredient.shoppingListId,
      id.houseId,
    );
  }
}
