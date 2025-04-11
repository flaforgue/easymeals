import { useParams } from 'react-router-dom';
import { usePublicRecipe } from '#/modules/cooking/recipe/queries';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import DeleteRecipeButton from '#/modules/cooking/recipe/components/buttons/delete-recipe-button';
import EditRecipeButton from '#/modules/cooking/recipe/components/buttons/edit-recipe-button';
import DefaultLinkButton from '#/components/buttons/link-buttons/default-link-button';
import ShareRecipeButton from '#/modules/cooking/recipe/components/buttons/share-recipe-button';
import ShowRecipeDetails from '#/modules/cooking/recipe/templates/show-recipe-details';
import { useUserHouse } from '#/modules/user/house/queries';
import ImportRecipeButton from '#/modules/cooking/recipe/components/buttons/import-recipe-button';
import ToggleRecipeBookmarkIconButton from '#/modules/cooking/recipe-bookmark/components/toggle-recipe-bookmark-icon-button';

export default function ShowRecipe() {
  const house = useUserHouse();
  const recipeId = useParams().recipeId!;
  const recipe = usePublicRecipe(recipeId);

  if (recipe === undefined || house === undefined) {
    return <MainContentLoadingOverlay />;
  }

  return (
    <section
      className={`
        min-w-screen
        mb-16
      `}
    >
      <div
        className={`
          flex
          items-center
          justify-between
        `}
      >
        <DefaultLinkButton
          to="/app/recipes"
          icon="backward"
        >
          <span
            className={`
              hidden

              tablet:inline
            `}
          >
            Mes recettes
          </span>
        </DefaultLinkButton>
        <div
          className={`
            flex
            items-center
            gap-1
          `}
        >
          {recipe.houseId !== house.id && <ImportRecipeButton recipeId={recipeId} />}
          <ToggleRecipeBookmarkIconButton recipeId={recipeId} />
          <ShareRecipeButton recipe={recipe} />
          {recipe.houseId === house.id && (
            <>
              <div
                className={`
                  ml-2
                  flex
                  h-6
                  items-center
                  border-l
                  border-slate-200
                  pl-2
                `}
              />
              <EditRecipeButton recipeId={recipe.id} />
              <DeleteRecipeButton recipeId={recipe.id} />
            </>
          )}
        </div>
      </div>

      <ShowRecipeDetails
        recipe={recipe}
        userHouseId={house.id}
        defaultNbPortions={house?.defaultNbPortions ?? 2}
      />
    </section>
  );
}
