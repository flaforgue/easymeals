import { ShoppingList } from '#/core/shopping/shopping-list/entities/shopping-list.entity';

interface ShoppingListWithItems {
  id: string;
  name: string;
  ingredientSuggestions: {
    quantity: number;
    ingredient: {
      id: string;
      name: string;
      unit: {
        abbreviation: string;
        name: string;
        code: string;
      };
    };
  }[];
  ingredients: {
    isChecked: boolean;
    quantity: number;
    ingredient: {
      id: string;
      name: string;
      ingredientCategoryId: string;
      unit: {
        abbreviation: string;
        name: string;
        code: string;
      };
    };
  }[];
  products: {
    isChecked: boolean;
    product: {
      id: string;
      name: string;
      productCategoryId: string;
    };
    quantity: number;
  }[];
}

export abstract class ShoppingListReadRepository {
  public abstract getPage(
    houseId: string,
    pagination: {
      page: number;
      nbPerPage: number;
      orderBy: 'createdAt';
      orderDirection: 'asc' | 'desc';
    },
  ): Promise<ShoppingListWithItems[]>;

  public abstract findById(id: { id: string; houseId: string }): Promise<ShoppingListWithItems>;

  public abstract findEntityById(id: { id: string; houseId: string }): Promise<ShoppingList>;

  public abstract exists(id: { id: string; houseId: string }): Promise<boolean>;
}
