import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Prisma } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListIngredientWriteRepository implements ShoppingListIngredientWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async addIngredientToShoppingList(shoppingListIngredient: ShoppingListIngredient): Promise<void> {
    await this.prisma.shoppingListIngredientPivot.upsert({
      where: {
        shoppingListId_ingredientId: {
          shoppingListId: shoppingListIngredient.shoppingListId,
          ingredientId: shoppingListIngredient.ingredientId,
        },
        shoppingList: {
          houseId: shoppingListIngredient.houseId,
        },
      },
      create: {
        quantity: shoppingListIngredient.quantity,
        ingredient: {
          connect: {
            id: shoppingListIngredient.ingredientId,
            OR: [{ houseId: null }, { houseId: shoppingListIngredient.houseId }],
          },
        },
        shoppingList: {
          connect: {
            id: shoppingListIngredient.shoppingListId,
            houseId: shoppingListIngredient.houseId,
          },
        },
      },
      update: {
        quantity: {
          increment: shoppingListIngredient.quantity,
        },
      },
    });

    return;
  }

  public async addManyIngredientsToShoppingList(shopplingListIngredients: ShoppingListIngredient[]): Promise<void> {
    const insertQueryValues = shopplingListIngredients.map(
      (shopplingListIngredient) =>
        Prisma.sql`(${Prisma.join([shopplingListIngredient.shoppingListId, shopplingListIngredient.ingredientId, shopplingListIngredient.quantity])})`,
    );

    const query = Prisma.sql`
      INSERT INTO "ShoppingListIngredientPivot" ("shoppingListId", "ingredientId", "quantity")
      VALUES ${Prisma.join(insertQueryValues)}
      ON CONFLICT ("shoppingListId", "ingredientId") DO UPDATE
      SET "quantity" = "ShoppingListIngredientPivot"."quantity" + EXCLUDED."quantity"
    `;

    await this.prisma.$executeRaw(query);

    return;
  }

  public async delete(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void> {
    await this.prisma.shoppingListIngredientPivot.delete({
      where: {
        shoppingListId_ingredientId: {
          shoppingListId: id.shoppingListId,
          ingredientId: id.ingredientId,
        },
        shoppingList: {
          houseId: id.houseId,
        },
      },
    });

    return;
  }

  public async updateQuantity(shoppingListIngredient: ShoppingListIngredient): Promise<void> {
    await this.prisma.shoppingListIngredientPivot.update({
      where: {
        shoppingListId_ingredientId: {
          shoppingListId: shoppingListIngredient.shoppingListId,
          ingredientId: shoppingListIngredient.ingredientId,
        },
        shoppingList: {
          houseId: shoppingListIngredient.houseId,
        },
      },
      data: {
        quantity: shoppingListIngredient.quantity,
      },
    });

    return;
  }

  public async updateCheckState(
    id: {
      shoppingListId: string;
      ingredientId: string;
      houseId: string;
    },
    isChecked: boolean,
  ): Promise<void> {
    await this.prisma.shoppingListIngredientPivot.update({
      data: {
        isChecked: isChecked,
      },
      where: {
        shoppingListId_ingredientId: {
          shoppingListId: id.shoppingListId,
          ingredientId: id.ingredientId,
        },
        shoppingList: {
          houseId: id.houseId,
        },
      },
    });

    return;
  }
}
