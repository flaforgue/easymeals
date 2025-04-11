import ClickableCard from '#/components/cards/clickable-card';
import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import { Recipe } from '#/shared';
import RecipeBadges from '#/modules/cooking/recipe/components/recipe-badges';
import Badge from '#/components/badge';
import ToggleRecipeBookmarkButton from '#/modules/cooking/recipe-bookmark/components/toggle-recipe-bookmark-button';
import LocalOverlay from '#/components/overlays/local-overlay';

interface RecipeCardProps {
  recipe: Recipe;
  handleClick?: () => void;
  isActive?: boolean;
}

export default function RecipeCard({ recipe, handleClick, isActive }: RecipeCardProps) {
  const illustrationUrl = recipe.illustrationUrl ?? DEFAULT_RECIPE_ILLUSTRATION_URL;
  const activeRecipeIcon = (
    <img
      width="32"
      src="/icons/checked.png"
      className={`
        absolute
        left-[calc(50%-1.25rem)]
        mt-16
        h-10
        w-10
        rounded-full
        bg-green-500
        shadow-sm
        shadow-green-900
      `}
    />
  );

  return (
    <ClickableCard
      className="h-full"
      handleClick={handleClick}
    >
      <div
        className={`
          relative
          h-full
          overflow-hidden
          rounded
          text-slate-700
          transition
        `}
      >
        <div
          className={`
            relative
            h-40
            w-full
          `}
        >
          {isActive === true && activeRecipeIcon}
          <img
            src={illustrationUrl}
            className={`
              h-full
              w-full
              rounded-t
              object-cover
              object-center
            `}
            alt={recipe.name}
          />
          <div
            className={`
              absolute
              -bottom-4
              left-2
              z-20
              h-[35px]
              w-[35px]
            `}
          >
            <Badge>
              <ToggleRecipeBookmarkButton recipeId={recipe.id} />
            </Badge>
          </div>
          <div
            className={`
              absolute
              -bottom-4
              right-2
              z-20
              rounded-full
            `}
          >
            <RecipeBadges
              size="small"
              recipe={recipe}
            />
          </div>
        </div>
        <div
          className={`
            flex
            h-[calc(100%-10rem)]
            flex-col
            justify-between
            px-4
            pb-2
            pt-4
            transition-all

            ${isActive === true ? `bg-green-500` : `bg-slate-100`}
          `}
        >
          <div
            className={`
              my-2
              text-base
              leading-tight

              ${isActive === true ? `text-white` : ''}
            `}
          >
            {recipe.name}
          </div>
          <div
            className={`
              flex
              justify-between
              text-sm

              ${isActive === true ? `text-white` : `text-slate-500`}
            `}
          >
            <p
              data-tooltip-id="global"
              data-tooltip-content="Durée de préparation"
              className="mb-2"
            >
              <img
                className={`
                  mr-2
                  inline
                  align-bottom
                `}
                height="22"
                width="22"
                src="/icons/preparing.png"
                alt="Durée de préparation"
              />
              {`${recipe.preparationTimeInMinutes} mins`}
            </p>
            <p
              data-tooltip-id="global"
              data-tooltip-content="Durée totale"
            >
              <img
                className={`
                  mr-2
                  inline
                  align-bottom
                `}
                height="24"
                width="24"
                src="/icons/cooking.png"
                alt="Durée totale"
              />
              {`${recipe.totalTimeInMinutes} mins`}
            </p>
          </div>
          {isActive !== true && (
            <LocalOverlay
              className={`
                z-10

                hover:bg-green-500
              `}
            >
              <div
                className={`
                  flex
                  h-full
                  w-full
                  justify-center
                  opacity-75
                `}
              >
                {activeRecipeIcon}
              </div>
            </LocalOverlay>
          )}
        </div>
      </div>
    </ClickableCard>
  );
}
