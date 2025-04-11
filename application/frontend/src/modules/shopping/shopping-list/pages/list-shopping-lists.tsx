import { useShoppingLists } from '#/modules/shopping/shopping-list/queries';
import ShoppingListEmptyState from '#/modules/shopping/shopping-list/components/shopping-list-empty-state';
import FloatingActionButtonContainer from '#/components/floating-action-button-container';
import CreateEmptyShoppingListButton from '#/modules/shopping/shopping-list/components/buttons/create-empty-shopping-list-button';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import DefaultActionButton from '#/components/buttons/action-buttons/default-action-button';
import ShoppingListCard from '#/modules/shopping/shopping-list/components/shopping-list-card';
import { logError } from '#/utils/error';

export default function ListShoppingLists() {
  const { shoppingLists, hasNextPage, fetchNextPage, isFetching } = useShoppingLists();
  const isPageEmpty = !isFetching && shoppingLists.length === 0;

  return (
    <div>
      <div
        className={`
          fixed
          -top-8
          left-0
          right-0
          z-0
          h-60
          w-full
          bg-[url('/images/banner-shopping.jpg')]
          bg-cover
          bg-center

          tablet:left-20
          tablet:w-[calc(100%-5rem)]

          laptop:left-60
          laptop:w-[calc(100%-15rem)]
        `}
      />
      {isPageEmpty && <ShoppingListEmptyState />}
      {isFetching && <MainContentLoadingOverlay />}
      {!isPageEmpty && (
        <div
          className={`
            z-1
            relative
            -mb-4
            -ml-4
            -mr-4
            mt-40
            bg-white
            px-6
            pb-24
            pt-6
          `}
        >
          <span
            className={`
              fixed
              left-0
              top-0
              z-0
              h-full
              w-full
              bg-slate-700
              bg-opacity-5

              tablet:left-20

              laptop:left-60
            `}
          />
          <div
            className={`
              -t-32
              z-1
              relative
              grid
              grid-cols-1
              gap-3

              tablet:grid-cols-2

              laptop:-mt-20
              laptop:grid-cols-4
            `}
          >
            {shoppingLists.map((shoppingList, index) => {
              return (
                <ShoppingListCard
                  key={shoppingList.id}
                  shoppingList={shoppingList}
                  className={
                    index === 0
                      ? `
                        border-2
                        border-sky-500
                      `
                      : ''
                  }
                />
              );
            })}
          </div>
          {hasNextPage && (
            <div
              className={`
                z-2
                relative
                mt-8
                text-center
              `}
            >
              <DefaultActionButton
                onClick={() => {
                  fetchNextPage().catch(logError);
                }}
                icon="refresh"
                label="Charger plus d'éléments"
                className="h-fit"
              />
            </div>
          )}
        </div>
      )}

      <FloatingActionButtonContainer>
        <CreateEmptyShoppingListButton />
      </FloatingActionButtonContainer>
    </div>
  );
}
