import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';

export abstract class ShoppingListIngredientWriteRepository {
  public abstract addIngredientToShoppingList(shoppingListIngredient: ShoppingListIngredient): Promise<void>;

  public abstract addManyIngredientsToShoppingList(shopplingListIngredients: ShoppingListIngredient[]): Promise<void>;

  public abstract delete(id: { shoppingListId: string; ingredientId: string; houseId: string }): Promise<void>;

  public abstract updateQuantity(shoppingListIngredient: ShoppingListIngredient): Promise<void>;

  public abstract updateCheckState(
    id: {
      shoppingListId: string;
      ingredientId: string;
      houseId: string;
    },
    isChecked: boolean,
  ): Promise<void>;
}
