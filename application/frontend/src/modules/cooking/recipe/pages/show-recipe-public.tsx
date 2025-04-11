import { useParams } from 'react-router-dom';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import DefaultLinkButton from '#/components/buttons/link-buttons/default-link-button';
import { usePublicRecipe } from '#/modules/cooking/recipe/queries';
import ShareRecipeButton from '#/modules/cooking/recipe/components/buttons/share-recipe-button';
import ShowRecipeDetails from '#/modules/cooking/recipe/templates/show-recipe-details';

export default function ShowRecipePublic() {
  const recipeId = useParams().recipeId!;
  const recipe = usePublicRecipe(recipeId);

  if (recipe === undefined) {
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
          to="/recipes"
          icon="backward"
        >
          <span
            className={`
              hidden

              tablet:inline
            `}
          >
            Toutes les recettes
          </span>
        </DefaultLinkButton>
        <ShareRecipeButton recipe={recipe} />
      </div>

      <ShowRecipeDetails
        recipe={recipe}
        defaultNbPortions={2}
        userHouseId={undefined}
      />
    </section>
  );
}
