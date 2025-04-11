import { ShoppingListProduct } from '#/core/shopping/shopping-list/entities/shopping-list-product.entity';

export abstract class ShoppingListProductWriteRepository {
  public abstract addProductToShoppingList(shoppingListProduct: ShoppingListProduct): Promise<void>;

  public abstract updateQuantity(shoppingListProduct: ShoppingListProduct): Promise<void>;

  public abstract updateCheckState(
    id: {
      shoppingListId: string;
      productId: string;
      houseId: string;
    },
    isChecked: boolean,
  ): Promise<void>;

  public abstract delete(id: { shoppingListId: string; productId: string; houseId: string }): Promise<void>;
}
