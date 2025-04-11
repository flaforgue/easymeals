import { AddIngredientToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-ingredient-to-shopping-list/add-ingredient-to-shopping-list.command';
import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddIngredientToShoppingListHandler {
  public constructor(private readonly shoppingListIngredientWriteRepository: ShoppingListIngredientWriteRepository) {}

  public async handle(command: AddIngredientToShoppingListCommand): Promise<void> {
    const shoppingListIngredient = new ShoppingListIngredient(
      command.ingredientId,
      command.quantity,
      command.shoppingListId,
      command.houseId,
    );

    await this.shoppingListIngredientWriteRepository.addIngredientToShoppingList(shoppingListIngredient);

    return;
  }
}
