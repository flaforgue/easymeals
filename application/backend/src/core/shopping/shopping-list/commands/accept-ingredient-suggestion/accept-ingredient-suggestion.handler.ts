import { AcceptIngredientSuggestionCommand } from '#/core/shopping/shopping-list/commands/accept-ingredient-suggestion/accept-ingredient-suggestion.command';
import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';
import { ShoppingListIngredientSuggestionReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.read-repository';
import { ShoppingListIngredientSuggestionWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.write-repository';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AcceptIngredientSuggestionHandler {
  public constructor(
    private readonly shoppingListIngredientSuggestionReadRepository: ShoppingListIngredientSuggestionReadRepository,
    private readonly shoppingListIngredientWriteRepository: ShoppingListIngredientWriteRepository,
    private readonly shoppingListIngredientSuggestionWriteRepository: ShoppingListIngredientSuggestionWriteRepository,
  ) {}

  public async handle(command: AcceptIngredientSuggestionCommand): Promise<void> {
    const quantity = await this.shoppingListIngredientSuggestionReadRepository.findQuantityById({
      ingredientId: command.ingredientId,
      shoppingListId: command.shoppingListId,
      houseId: command.houseId,
    });
    const shoppingListIngredient = new ShoppingListIngredient(
      command.ingredientId,
      quantity,
      command.shoppingListId,
      command.houseId,
    );

    await Promise.all([
      this.shoppingListIngredientWriteRepository.addIngredientToShoppingList(shoppingListIngredient),
      this.shoppingListIngredientSuggestionWriteRepository.deleteIfExist({
        houseId: command.houseId,
        shoppingListId: command.shoppingListId,
        ingredientId: command.ingredientId,
      }),
    ]);

    return;
  }
}
