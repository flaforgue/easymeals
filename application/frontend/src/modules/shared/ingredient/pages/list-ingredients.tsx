import FloatingActionButtonContainer from '#/components/floating-action-button-container';
import IconFoodShop from '#/components/icons/icon-food-shop';
import LocalLoadingOverlay from '#/components/overlays/local-loading-overlay';
import Tag from '#/components/tag';
import useDebouncedValue from '#/hooks/use-debounced-value';
import CreateIngredientButton from '#/modules/shared/ingredient/components/buttons/create-ingredient-button';
import DeleteIngredientButton from '#/modules/shared/ingredient/components/buttons/delete-ingredient-button';
import EditIngredientButton from '#/modules/shared/ingredient/components/buttons/edit-ingredient-button';
import ListIngredientsForm from '#/modules/shared/ingredient/components/forms/list-ingredients-form';
import IngredientEmptyState from '#/modules/shared/ingredient/components/ingredient-empty-state';
import { useIngredients } from '#/modules/shared/ingredient/queries';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { getItemById } from '#/utils/array';
import { useState } from 'react';

export default function ListIngredients() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 500);
  const [ingredientCategoryId, setIngredientCategoryId] = useState<null | string>(null);
  const [unitId, setUnitId] = useState<null | string>(null);
  const [isUserContent, setIsUserContent] = useState(true);
  const ingredientCategories = useIngredientCategories();
  const { ingredients, isLoading } = useIngredients({
    search: debouncedSearch,
    ingredientCategoryId: ingredientCategoryId,
    unitId: unitId,
    onlyUserContent: isUserContent,
  });
  const isPageEmpty = ingredients.length === 0 && !isLoading;

  return (
    <div className="pb-16">
      <div className="mb-8">
        <ListIngredientsForm
          search={search}
          setSearch={setSearch}
          ingredientCategoryId={ingredientCategoryId}
          setIngredientCategoryId={setIngredientCategoryId}
          unitId={unitId}
          setUnitId={setUnitId}
          isUserContent={isUserContent}
          setIsUserContent={setIsUserContent}
        />
      </div>
      <div
        className={`
          flex
          gap-4
        `}
      >
        {isPageEmpty && <IngredientEmptyState />}
        {!isPageEmpty && (
          <>
            <div
              className={`
                w-full

                tablet:w-3/5
              `}
            >
              {!isPageEmpty && isLoading && (
                <div
                  className={`
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded
                  `}
                >
                  <LocalLoadingOverlay />
                </div>
              )}
              {ingredients.map((ingredient) => {
                return (
                  <div
                    key={ingredient.id}
                    className={`
                      flex
                      items-center
                      justify-between
                      gap-1
                      border-b
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-slate-700
                      transition-all

                      hover:bg-slate-100
                    `}
                  >
                    <div
                      className={`
                        flex
                        items-center
                        gap-2
                      `}
                    >
                      <img
                        width="35"
                        src={getItemById(ingredientCategories, ingredient.ingredientCategoryId)?.illustrationUrl}
                        className={`
                          overflow-visible
                          rounded-full
                          bg-white
                          p-1.5
                          shadow
                        `}
                      />
                      <Tag
                        className={`
                          min-w-24
                          bg-sky-100
                          text-center
                          text-xs
                        `}
                        text={ingredient.unit.name}
                      />
                      <span className="font-black">{ingredient.name}</span>
                    </div>
                    {ingredient.isUserContent && (
                      <div
                        className={`
                          flex
                          gap-1
                        `}
                      >
                        <EditIngredientButton ingredient={ingredient} />
                        <DeleteIngredientButton ingredientId={ingredient.id} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div
              className={`
                hidden
                h-full
                w-2/5
                overflow-hidden
                px-4
                text-sky-600

                tablet:block
              `}
            >
              <IconFoodShop />
            </div>
          </>
        )}
      </div>

      <FloatingActionButtonContainer>
        <CreateIngredientButton />
      </FloatingActionButtonContainer>
    </div>
  );
}
