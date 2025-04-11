import DefaultLinkButton from '#/components/buttons/link-buttons/default-link-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconProductShop from '#/components/icons/icon-product-shop';
import TextInput from '#/components/inputs/text-input';
import EditableQuantifiedIngredient from '#/modules/shared/ingredient/components/editable-quantified-ingredient';
import EditableQuantifiedProduct from '#/modules/shopping/product/components/editable-quantified-product';
import IngredientsByCategories from '#/modules/shared/ingredient-category/components/ingredients-by-categories';
import ProductsByCategories from '#/modules/shopping/product-category/components/products-by-categories';
import { IngredientOrProductType } from '#/modules/shopping/shopping-list/components/ingredient-or-product-input';
import IngredientSuggestions from '#/modules/shopping/shopping-list/components/ingredient-suggestions';
import QuantifiedIngredientOrProductForm from '#/modules/shopping/shopping-list/components/quantified-ingredient-or-product-form';
import {
  useAcceptShoppingListSuggestionMutation,
  useCreateShoppingListIngredientMutation,
  useCreateShoppingListProductMutation,
  useDeleteShoppingListIngredientMutation,
  useDeleteShoppingListProductMutation,
  useDeleteShoppingListSuggestionMutation,
  useUpdateShoppingListIngredientMutation,
  useUpdateShoppingListMutation,
  useUpdateShoppingListProductMutation,
} from '#/modules/shopping/shopping-list/mutations';
import { QuantifiedIngredient, QuantifiedProduct, ShoppingList } from '#/shared';
import { useState } from 'react';

interface EditableShoppintListProps {
  shoppingList: ShoppingList;
}

export default function EditableShoppingList({ shoppingList }: EditableShoppintListProps) {
  const deleteShoppingListIngredientMutation = useDeleteShoppingListIngredientMutation();
  const onIngredientDelete = (ingredientId: string) => {
    return deleteShoppingListIngredientMutation.mutateAsync({
      shoppingListId: shoppingList.id,
      ingredientId: ingredientId,
    });
  };

  const updateShoppingListIngredientMutation = useUpdateShoppingListIngredientMutation();
  const onIngredientQuantityUpdate = (ingredientId: string, newQuantity: number) => {
    return updateShoppingListIngredientMutation.mutate({
      shoppingListId: shoppingList.id,
      ingredientId: ingredientId,
      quantity: newQuantity,
    });
  };
  const editableIngredientComponentFactory = (quantifiedIngredient: QuantifiedIngredient) => {
    return (
      <div>
        <EditableQuantifiedIngredient
          quantifiedIngredient={quantifiedIngredient}
          onDelete={onIngredientDelete}
          onQuantityUpdate={onIngredientQuantityUpdate}
        />
      </div>
    );
  };

  const acceptShoppingListSuggestionMutation = useAcceptShoppingListSuggestionMutation();
  const acceptSuggestion = (ingredientId: string) => {
    acceptShoppingListSuggestionMutation.mutate({
      ingredientId: ingredientId,
      shoppingListId: shoppingList.id,
    });
  };

  const deleteShoppingListSuggestionMutation = useDeleteShoppingListSuggestionMutation();
  const deleteSuggestion = (ingredientId: string) => {
    deleteShoppingListSuggestionMutation.mutate({
      ingredientId: ingredientId,
      shoppingListId: shoppingList.id,
    });
  };

  const createShoppingListProductMutation = useCreateShoppingListProductMutation();
  const addProduct = (productId: string, quantity: number) => {
    createShoppingListProductMutation.mutate({
      quantity: quantity,
      productId: productId,
      shoppingListId: shoppingList.id,
    });
  };

  const createShoppingListIngredientMutation = useCreateShoppingListIngredientMutation();
  const addIngredient = (ingredientId: string, quantity: number) => {
    createShoppingListIngredientMutation.mutate({
      quantity: quantity,
      ingredientId: ingredientId,
      shoppingListId: shoppingList.id,
    });
  };

  const addNewIngredientOrProduct = (
    ingredientOrProductId: string,
    quantity: number,
    type: IngredientOrProductType,
  ) => {
    if (type === 'ingredient') {
      addIngredient(ingredientOrProductId, quantity);
    } else if (type === 'product') {
      addProduct(ingredientOrProductId, quantity);
    }
  };

  const deleteShoppingListProductMutation = useDeleteShoppingListProductMutation();
  const onProductDelete = (productId: string) => {
    return deleteShoppingListProductMutation.mutateAsync({
      shoppingListId: shoppingList.id,
      productId: productId,
    });
  };

  const updateShoppingListProductMutation = useUpdateShoppingListProductMutation();
  const onProductQuantityUpdate = (productId: string, newQuantity: number) => {
    return updateShoppingListProductMutation.mutate({
      shoppingListId: shoppingList.id,
      productId: productId,
      quantity: newQuantity,
    });
  };

  const editableProductComponentFactory = (quantifiedProduct: QuantifiedProduct) => {
    return (
      <div>
        <EditableQuantifiedProduct
          quantifiedProduct={quantifiedProduct}
          onDelete={onProductDelete}
          onQuantityUpdate={onProductQuantityUpdate}
        />
      </div>
    );
  };

  const mutation = useUpdateShoppingListMutation();
  const updateShoppingList = () => {
    if (shoppingList.name === name) {
      return;
    }

    mutation.mutate({
      id: shoppingList.id,
      name: name,
    });
  };
  const [name, setName] = useState(shoppingList.name);

  const isEmptyShoppingList =
    shoppingList.ingredientSuggestions.length === 0 &&
    shoppingList.ingredients.length === 0 &&
    shoppingList.products.length === 0;

  return (
    <div>
      <div
        className={`
          mb-4
          flex
          gap-4
        `}
      >
        <DefaultLinkButton
          to="/app/shopping-lists"
          icon="backward"
        >
          <span
            className={`
              hidden

              tablet:inline
            `}
          >
            Mes listes
          </span>
        </DefaultLinkButton>
        <TextInput
          value={name}
          onChange={setName}
          className={`
            w-full
            text-lg
          `}
        />
        <SubmitButton onClick={updateShoppingList}>Enregistrer</SubmitButton>
      </div>
      {shoppingList.ingredientSuggestions.length > 0 && (
        <div className="my-8">
          <IngredientSuggestions
            suggestedIngredients={shoppingList.ingredientSuggestions}
            onSuggestionAccepted={acceptSuggestion}
            onSuggestionDeleted={deleteSuggestion}
          />
        </div>
      )}
      <div
        className={`
          mt-4
          w-full

          tablet:w-fit
        `}
      >
        <QuantifiedIngredientOrProductForm onSubmit={addNewIngredientOrProduct} />
      </div>
      {isEmptyShoppingList && (
        <div
          className={`
            mx-auto
            mt-16
            w-2/5
            rounded-full
            bg-slate-200
            text-sky-600
          `}
        >
          <IconProductShop />
        </div>
      )}
      <div
        className={`
          flex-2
          my-4
          grid
          grid-cols-1
          gap-4

          tablet:grid-cols-2
        `}
      >
        <ProductsByCategories
          quantifiedProducts={shoppingList.products}
          productComponentFactory={editableProductComponentFactory}
        />
        <IngredientsByCategories
          quantifiedIngredients={shoppingList.ingredients}
          ingredientComponentFactory={editableIngredientComponentFactory}
        />
      </div>
    </div>
  );
}
