import { getRoundedQuantity, scaleQuantity, UnitCode } from '#/shared';
import { Injectable } from '@nestjs/common';
import { AddMealsToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-meals-to-shopping-list/add-meals-to-shopping-list.command';
import { ShoppingListReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.read-repository';
import { AuthorizationException } from '#/core/generic/authorization/authorization.exception';
import {
  GetShoppableMealsQueryResult,
  MealReadRepository,
} from '#/core/planning/meal/repositories/meal.read-repository';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { ShoppingListIngredientSuggestionWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.write-repository';
import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';
import { ShoppingListIngredientSuggestion } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient-suggestion.entity';

@Injectable()
export class AddMealsToShoppingListCommandHandler {
  public constructor(
    private readonly shoppingListReadRepository: ShoppingListReadRepository,
    private readonly mealReadRepository: MealReadRepository,
    private readonly shoppingListIngredientWriteRepository: ShoppingListIngredientWriteRepository,
    private readonly shoppingListIngredientSuggestionWriteRepository: ShoppingListIngredientSuggestionWriteRepository,
  ) {}

  public async handle(command: AddMealsToShoppingListCommand): Promise<void> {
    await this.assertShoppingListIsAllowed(command.shoppingListId, command.houseId);

    const shoppabledMeals = await this.mealReadRepository.getShoppableMeals(command.houseId, command.mealIds);
    const { shopplingListIngredients, shopplingListSuggestions } = this.buildShoppingListItemsToAdd(
      command.houseId,
      command.shoppingListId,
      shoppabledMeals,
    );

    await Promise.all([
      this.addManyIngredients(shopplingListIngredients),
      this.addManySuggestions(shopplingListSuggestions),
    ]);

    return;
  }

  private async assertShoppingListIsAllowed(shoppingListId: string, houseId: string): Promise<void> {
    const isAllowed = await this.shoppingListReadRepository.exists({
      id: shoppingListId,
      houseId: houseId,
    });

    if (isAllowed) {
      return;
    }

    throw new AuthorizationException(`Shopping list ${shoppingListId} is not allowed in house ${houseId}`);
  }

  private buildShoppingListItemsToAdd(
    houseId: string,
    shoppingListId: string,
    shoppableMeals: GetShoppableMealsQueryResult,
  ): {
    shopplingListIngredients: ShoppingListIngredient[];
    shopplingListSuggestions: ShoppingListIngredientSuggestion[];
  } {
    const allQuantifiedIngredients = shoppableMeals.flatMap((shoppableMeal) => {
      return shoppableMeal.recipe.ingredients.map((mealIngredient) => {
        return {
          ingredientId: mealIngredient.ingredient.id,
          quantity: scaleQuantity(mealIngredient.quantity, shoppableMeal.recipe.nbPortions, shoppableMeal.nbPortions),
          isStoredInQuantity: mealIngredient.ingredient.isStoredInQuantity,
          unitCode: mealIngredient.ingredient.unit.code as UnitCode,
        };
      });
    });

    function groupQuantifiedIngredientsById(
      acc: Record<string, { quantity: number; unitCode: UnitCode }>,
      curr: { ingredientId: string; quantity: number; unitCode: UnitCode },
    ): Record<string, { quantity: number; unitCode: UnitCode }> {
      const initialQuantity = acc[curr.ingredientId]?.quantity ?? 0;

      return {
        ...acc,
        [curr.ingredientId]: {
          quantity: initialQuantity + curr.quantity,
          unitCode: curr.unitCode,
        },
      };
    }

    const shoppingListIngredients = [];
    const onlyQuantifiedIngredients = allQuantifiedIngredients
      .filter((quantifiedIngredient) => !quantifiedIngredient.isStoredInQuantity)
      .reduce(groupQuantifiedIngredientsById, {});

    for (const ingredientId in onlyQuantifiedIngredients) {
      const quantifiedIngredient = onlyQuantifiedIngredients[ingredientId];
      const roundedQuantity = getRoundedQuantity(quantifiedIngredient.quantity, quantifiedIngredient.unitCode);
      shoppingListIngredients.push(new ShoppingListIngredient(ingredientId, roundedQuantity, shoppingListId, houseId));
    }

    const shoppingListIngredientSuggestions = [];
    const onlyQuantifiedSuggestions = allQuantifiedIngredients
      .filter((quantifiedIngredient) => quantifiedIngredient.isStoredInQuantity)
      .reduce(groupQuantifiedIngredientsById, {});
    for (const ingredientId in onlyQuantifiedSuggestions) {
      const quantifiedSuggestion = onlyQuantifiedSuggestions[ingredientId];
      const roundedQuantity = getRoundedQuantity(quantifiedSuggestion.quantity, quantifiedSuggestion.unitCode);
      shoppingListIngredientSuggestions.push(
        new ShoppingListIngredientSuggestion(ingredientId, roundedQuantity, shoppingListId, houseId),
      );
    }

    return {
      shopplingListIngredients: shoppingListIngredients,
      shopplingListSuggestions: shoppingListIngredientSuggestions,
    };
  }

  private addManyIngredients(shopplingListIngredients: ShoppingListIngredient[]): Promise<void> {
    if (shopplingListIngredients.length === 0) {
      return Promise.resolve();
    }

    return this.shoppingListIngredientWriteRepository.addManyIngredientsToShoppingList(shopplingListIngredients);
  }

  private addManySuggestions(shopplingListIngredientSuggestions: ShoppingListIngredientSuggestion[]): Promise<void> {
    if (shopplingListIngredientSuggestions.length === 0) {
      return Promise.resolve();
    }

    return this.shoppingListIngredientSuggestionWriteRepository.addManyIngredientSuggestionsToShoppingList(
      shopplingListIngredientSuggestions,
    );
  }
}
