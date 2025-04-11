import CreateIconButton from '#/components/buttons/icon-buttons/create-icon-button';
import Card from '#/components/cards/card';
import IconCheck from '#/components/icons/icon-check';
import ProgressBar from '#/components/progress/progress-bar';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { groupQuantifiedIngredientsByCategories } from '#/modules/shared/ingredient-category/utils';
import DeleteShoppingListButton from '#/modules/shopping/shopping-list/components/buttons/delete-shopping-list-button';
import EditShoppingListButton from '#/modules/shopping/shopping-list/components/buttons/edit-shopping-list-button';
import ShoppingListCardEmptyState from '#/modules/shopping/shopping-list/components/shopping-list-card-empty-state';
import ShoppingListItemCategory from '#/modules/shopping/shopping-list/components/shopping-list-item-category';
import { getShoppingListCompletionPercents } from '#/modules/shopping/shopping-list/utils';
import { ShoppingList } from '#/shared';
import { getItemById } from '#/utils/array';

interface ShoppingListCardProps {
  shoppingList: ShoppingList;
  className?: string;
}
export default function ShoppingListCard({ shoppingList, className = '' }: ShoppingListCardProps) {
  const ingredientCategories = useIngredientCategories();
  const nbProducts = shoppingList.products.length;
  const nbItems = shoppingList.ingredients.length + nbProducts;
  const isEmpty = nbItems === 0;
  const progress = getShoppingListCompletionPercents(shoppingList);
  const isComplete = progress === 100;
  const nbCategoriesToDisplay = nbProducts === 0 ? 9 : 8;
  const categoriesWithMostIngredients = groupQuantifiedIngredientsByCategories(
    shoppingList.ingredients,
    ingredientCategories,
  ).sort((a, b) => b.quantifiedIngredients.length - a.quantifiedIngredients.length);

  return (
    <Card
      className={`
        rounded-md

        ${className}
      `}
    >
      <div
        className={`
          flex
          h-full
          flex-col
          rounded
        `}
      >
        <div
          className={`
            rounded-t
            p-4
            pb-2

            ${isComplete ? 'bg-green-100' : `bg-sky-100`}
          `}
        >
          <div
            className={`
              mb-1
              text-slate-700
            `}
          >
            {shoppingList.name}
          </div>
          <div
            className={`
              flex
              items-center
              justify-between
              text-sm
              text-slate-500
            `}
          >
            {isEmpty ? 'Vide' : `${nbItems} articles`}
            <div
              className={`
                flex
                justify-center
                gap-2
              `}
            >
              <EditShoppingListButton shoppingListId={shoppingList.id} />
              <DeleteShoppingListButton shoppintListId={shoppingList.id} />
            </div>
          </div>
        </div>
        {isEmpty && (
          <div
            className={`
              h-full
              rounded
              bg-white
              pb-4
              text-sky-300
            `}
          >
            <div
              className={`
                max-h-1/2
                h-40
              `}
            >
              <ShoppingListCardEmptyState />
            </div>
            <p
              className={`
                -mt-6
                text-center
                text-slate-500
              `}
            >
              Liste vide
            </p>
          </div>
        )}
        {isComplete && (
          <div
            className={`
              itemx-center
              flex
              h-full
              justify-center
            `}
          >
            <div
              className={`
                w-1/2
                p-6
                text-green-500
              `}
            >
              <IconCheck />
            </div>
          </div>
        )}
        {!isEmpty && !isComplete && (
          <div
            className={`
              relative
              h-full
              rounded-b
              bg-white
              p-4
            `}
          >
            <div
              className={`
                mb-4
                flex
                items-center
                gap-1
              `}
            >
              <ProgressBar
                percents={progress}
                size="small"
              />
              <CreateIconButton
                to={`/app/shopping-lists/${shoppingList.id}`}
                icon="shopping"
                tooltipText="Faire les courses"
              />
            </div>
            <div
              className={`
                grid
                grid-cols-3
                gap-4
              `}
            >
              {nbProducts > 0 && (
                <ShoppingListItemCategory
                  illustrationUrl="/icons/product-categories.png"
                  nbItems={nbProducts}
                  tooltipText="Produits"
                />
              )}
              {categoriesWithMostIngredients.map((ingredientsByCategory, index) => {
                const hasMoreCategories = categoriesWithMostIngredients.length > nbCategoriesToDisplay;
                if (index === nbCategoriesToDisplay - 1 && hasMoreCategories) {
                  return (
                    <ShoppingListItemCategory
                      key="see-more"
                      illustrationUrl="/icons/suspens.png"
                      nbItems={0}
                      tooltipText="Et plein d'autres choses"
                    />
                  );
                }

                if (index >= nbCategoriesToDisplay) {
                  return null;
                }

                const category = getItemById(ingredientCategories, ingredientsByCategory.id);
                if (category === undefined) {
                  return null;
                }

                return (
                  <ShoppingListItemCategory
                    key={category.id}
                    illustrationUrl={category.illustrationUrl}
                    nbItems={ingredientsByCategory.quantifiedIngredients.length}
                    tooltipText={category.name}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
