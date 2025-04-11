import { UpdateIngredientQuantityCommand } from '#/core/shopping/shopping-list/commands/update-ingredient-quantity/update-ingredient-quantity.command';
import { ShoppingListIngredientReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.read-repository';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateIngredientQuantityHandler {
  public constructor(
    private readonly shoppingListIngredientReadRepository: ShoppingListIngredientReadRepository,
    private readonly shoppingListIngredientWriteRepository: ShoppingListIngredientWriteRepository,
  ) {}

  public async handle(command: UpdateIngredientQuantityCommand): Promise<void> {
    const shoppingListIngredient = await this.shoppingListIngredientReadRepository.findEntityById({
      ingredientId: command.ingredientId,
      shoppingListId: command.shoppingListId,
      houseId: command.houseId,
    });

    shoppingListIngredient.quantity = command.quantity;

    await this.shoppingListIngredientWriteRepository.updateQuantity(shoppingListIngredient);

    return;
  }
}
