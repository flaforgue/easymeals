import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { ShoppingList, UnitCode } from '#/shared';

interface PrismaEagerLoadedShoppingList {
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

@Injectable()
export class ShoppingListSerializer extends BaseSerializer<PrismaEagerLoadedShoppingList, ShoppingList> {
  public serialize(shoppingList: PrismaEagerLoadedShoppingList): ShoppingList {
    return {
      id: shoppingList.id,
      name: shoppingList.name,
      ingredientSuggestions: this.serializeIngredientSuggestions(shoppingList),
      ingredients: this.serializeIngredients(shoppingList),
      products: this.serializeProducts(shoppingList),
    };
  }

  private serializeIngredients(shoppingList: PrismaEagerLoadedShoppingList) {
    return shoppingList.ingredients.map((shoppingListIngredient) => {
      return {
        id: shoppingListIngredient.ingredient.id,
        isChecked: shoppingListIngredient.isChecked,
        name: shoppingListIngredient.ingredient.name,
        quantity: shoppingListIngredient.quantity,
        ingredientCategoryId: shoppingListIngredient.ingredient.ingredientCategoryId,
        unitAbbreviation: shoppingListIngredient.ingredient.unit.abbreviation,
        unitName: shoppingListIngredient.ingredient.unit.name,
        unitCode: shoppingListIngredient.ingredient.unit.code as UnitCode,
      };
    });
  }

  private serializeIngredientSuggestions(shoppingList: PrismaEagerLoadedShoppingList) {
    return shoppingList.ingredientSuggestions.map((ingredientSuggestion) => {
      return {
        ingredientId: ingredientSuggestion.ingredient.id,
        ingredientName: ingredientSuggestion.ingredient.name,
        quantity: ingredientSuggestion.quantity,
        unitAbbreviation: ingredientSuggestion.ingredient.unit.abbreviation,
        unitName: ingredientSuggestion.ingredient.unit.name,
      };
    });
  }

  private serializeProducts(shoppingList: PrismaEagerLoadedShoppingList) {
    return shoppingList.products.map((shoppingListProduct) => {
      return {
        id: shoppingListProduct.product.id,
        name: shoppingListProduct.product.name,
        isChecked: shoppingListProduct.isChecked,
        productCategoryId: shoppingListProduct.product.productCategoryId,
        quantity: shoppingListProduct.quantity,
      };
    });
  }
}
