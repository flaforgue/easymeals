import { ShoppingListProduct } from '#/core/shopping/shopping-list/entities/shopping-list-product.entity';

export abstract class ShoppingListProductReadRepository {
  public abstract findEntityById(id: {
    productId: string;
    shoppingListId: string;
    houseId: string;
  }): Promise<ShoppingListProduct>;
}
