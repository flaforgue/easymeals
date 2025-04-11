import { ShoppingListIngredient } from '#/core/shopping/shopping-list/entities/shopping-list-ingredient.entity';

export abstract class ShoppingListIngredientReadRepository {
  public abstract findEntityById(id: {
    ingredientId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<ShoppingListIngredient>;
}
