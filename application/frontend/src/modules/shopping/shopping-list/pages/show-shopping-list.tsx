import { useParams } from 'react-router-dom';
import { useShortPolledShoppingList } from '#/modules/shopping/shopping-list/queries';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import IngredientsByCategories from '#/modules/shared/ingredient-category/components/ingredients-by-categories';
import { CheckedQuantifiedIngredient, CheckedQuantifiedProduct } from '#/shared';
import {
  useCheckShoppingListIngredientMutation,
  useCheckShoppingListProductMutation,
} from '#/modules/shopping/shopping-list/mutations';
import CheckableQuantifiedIngredient from '#/modules/shared/ingredient/components/checkable-quantified-ingredient';
import { ReactNode } from 'react';
import ProductsByCategories from '#/modules/shopping/product-category/components/products-by-categories';
import CheckableQuantifiedProduct from '#/modules/shopping/product/components/checkable-quantified-product';
import { getShoppingListCompletionPercents } from '#/modules/shopping/shopping-list/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import ProgressBar from '#/components/progress/progress-bar';
import useAnimationPlayedOnce from '#/hooks/use-animation-played-once';
import DefaultLinkButton from '#/components/buttons/link-buttons/default-link-button';

export default function ShowShoppingList() {
  const shoppingListId = useParams().shoppingListId!;
  const shoppingList = useShortPolledShoppingList({ id: shoppingListId });

  const checkShoppingListIngredientMutation = useCheckShoppingListIngredientMutation();
  const updateIngredientIsChecked = (ingredientId: string, isChecked: boolean) => {
    checkShoppingListIngredientMutation.mutate({
      shoppingListId: shoppingListId,
      ingredientId: ingredientId,
      isChecked: isChecked,
    });
  };
  const checkableIngredientComponentFactory = (quantifiedIngredient: CheckedQuantifiedIngredient): ReactNode => {
    return (
      <div
        className={`
          mt-2
          w-full
        `}
      >
        <CheckableQuantifiedIngredient
          quantifiedIngredient={quantifiedIngredient}
          onChecked={updateIngredientIsChecked}
          shouldRoundQuantity={false}
        />
      </div>
    );
  };

  const checkShoppingListProductMutation = useCheckShoppingListProductMutation();
  const updateProductIsChecked = (productId: string, isChecked: boolean) => {
    checkShoppingListProductMutation.mutate({
      shoppingListId: shoppingListId,
      productId: productId,
      isChecked: isChecked,
    });
  };
  const checkableProductComponentFactory = (quantifiedProduct: CheckedQuantifiedProduct) => {
    return (
      <li
        key={quantifiedProduct.id}
        className="text-slate-700"
      >
        <CheckableQuantifiedProduct
          quantifiedProduct={quantifiedProduct}
          onChecked={updateProductIsChecked}
        />
      </li>
    );
  };

  const percents = shoppingList === undefined ? 0 : getShoppingListCompletionPercents(shoppingList);
  const isSuccessAnimationPlaying = useAnimationPlayedOnce(percents === 100, 3000);

  if (shoppingList === undefined) {
    return <MainContentLoadingOverlay />;
  }

  return (
    <div
      className={`
        -m-4
        bg-white
        p-4
        py-8
      `}
    >
      {isSuccessAnimationPlaying && (
        <Player
          src="/lotties/checked.json"
          autoplay={true}
          className={`
            max-h-screen-tablet
            fixed
            left-[calc(50%-6rem)]
            top-[calc(50%-12rem)]
            mx-auto
            h-[12rem]
            w-[12rem]
            max-w-screen-tablet
          `}
        />
      )}
      <div
        className={`
          fixed
          left-0
          right-0
          top-0
          flex
          items-center
          gap-2
          bg-slate-50
          p-4
          shadow-md

          tablet:left-60
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
        <ProgressBar
          percents={percents}
          size="large"
        />
      </div>
      <div
        className={`
          mt-14
          grid
          grid-cols-1
          gap-4
        `}
      >
        <ProductsByCategories
          quantifiedProducts={shoppingList.products}
          productComponentFactory={checkableProductComponentFactory}
        />
        <IngredientsByCategories
          quantifiedIngredients={shoppingList.ingredients}
          ingredientComponentFactory={checkableIngredientComponentFactory}
        />
      </div>
    </div>
  );
}
