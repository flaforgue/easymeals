import { ShoppingListIngredientSuggestion } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient-suggestion.entity';
import { ShoppingListIngredientSuggestionWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Prisma } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListIngredientSuggestionWriteRepository
  implements ShoppingListIngredientSuggestionWriteRepository
{
  public constructor(private readonly prisma: PrismaService) {}

  public async addManyIngredientSuggestionsToShoppingList(
    shopplingListSuggestions: ShoppingListIngredientSuggestion[],
  ): Promise<void> {
    const insertQueryValues = shopplingListSuggestions.map((input) => {
      return Prisma.sql`(${Prisma.join([input.shoppingListId, input.ingredientId, input.quantity])})`;
    });

    const query = Prisma.sql`
      INSERT INTO "ShoppingListIngredientSuggestionPivot" ("shoppingListId","ingredientId","quantity")
      VALUES ${Prisma.join(insertQueryValues)}
      ON CONFLICT ("shoppingListId", "ingredientId") DO UPDATE
      SET "quantity" = "ShoppingListIngredientSuggestionPivot"."quantity" + EXCLUDED."quantity"
    `;

    await this.prisma.$executeRaw(query);

    return;
  }

  public async delete(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void> {
    await this.prisma.shoppingListIngredientSuggestionPivot.delete({
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

  public async deleteIfExist(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void> {
    await this.prisma.shoppingListIngredientSuggestionPivot.deleteMany({
      where: {
        shoppingListId: id.shoppingListId,
        ingredientId: id.ingredientId,
        shoppingList: {
          houseId: id.houseId,
        },
      },
    });

    return;
  }
}
