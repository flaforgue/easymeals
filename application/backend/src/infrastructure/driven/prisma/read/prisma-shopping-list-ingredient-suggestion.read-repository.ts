import { ShoppingListIngredientSuggestionReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListIngredientSuggestionReadRepository
  implements ShoppingListIngredientSuggestionReadRepository
{
  public constructor(private readonly prisma: PrismaService) {}

  public async findQuantityById(id: {
    ingredientId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<number> {
    const shoppingListIngredientSuggestion = await this.prisma.shoppingListIngredientSuggestionPivot.findUniqueOrThrow({
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

    return shoppingListIngredientSuggestion.quantity;
  }
}
