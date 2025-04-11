import { ShoppingList } from '#/core/shopping/shopping-list/entities/shopping-list.entity';

export abstract class ShoppingListWriteRepository {
  public abstract create(shoppingList: ShoppingList): Promise<void>;

  public abstract updateName(shoppingList: ShoppingList): Promise<void>;

  public abstract delete(id: { houseId: string; shoppingListId: string }): Promise<void>;
}
