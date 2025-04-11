import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import { Recipe } from '#/shared';
import RecipeBadges from '#/modules/cooking/recipe/components/recipe-badges';
import Card from '#/components/cards/card';
import Tag from '#/components/tag';
import { Link } from 'react-router-dom';
import IconSearch from '#/components/icons/icon-search';
import LocalOverlay from '#/components/overlays/local-overlay';
import ToggleRecipeBookmarkButton from '#/modules/cooking/recipe-bookmark/components/toggle-recipe-bookmark-button';
import Badge from '#/components/badge';
import { useAuth0 } from '@auth0/auth0-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const illustrationUrl = recipe.illustrationUrl ?? DEFAULT_RECIPE_ILLUSTRATION_URL;
  const { isAuthenticated } = useAuth0();
  const linkToRecipe = isAuthenticated ? `/app/recipes/${recipe.id}` : `/recipes/${recipe.id}`;

  return (
    <Card
      className={`
        h-full
        bg-white
      `}
    >
      <div
        className={`
          h-full
          overflow-hidden
          rounded-md
          text-slate-700
          transition-all
          duration-75
        `}
      >
        <div
          className={`
            relative
            h-52
            w-full
          `}
        >
          <Link to={linkToRecipe}>
            <LocalOverlay>
              <div
                className={`
                  h-10
                  w-10
                  text-white
                `}
              >
                <IconSearch />
              </div>
            </LocalOverlay>
          </Link>
          <img
            src={illustrationUrl}
            className={`
              h-full
              w-full
              rounded-t
              object-cover
              object-center
            `}
          />
          {isAuthenticated && (
            <div
              className={`
                absolute
                -bottom-6
                left-2
                h-[45px]
                w-[45px]
              `}
            >
              <Badge>
                <ToggleRecipeBookmarkButton recipeId={recipe.id} />
              </Badge>
            </div>
          )}
          <div
            className={`
              absolute
              -bottom-6
              right-2
            `}
          >
            <RecipeBadges
              size="medium"
              recipe={recipe}
            />
          </div>
        </div>
        <div
          className={`
            flex
            h-[calc(100%-13rem)]
            flex-col
            justify-between
            bg-slate-50
            px-4
            py-4
            transition-all
          `}
        >
          <div
            className={`
              text-md
              my-4
              font-black
              leading-6

              group-hover:underline
            `}
          >
            {recipe.name}
          </div>
          <div
            className={`
              flex
              justify-between
            `}
          >
            <p
              data-tooltip-id="global"
              data-tooltip-content="Durée de préparation"
              className=""
            >
              <img
                className={`
                  mr-2
                  inline
                  overflow-visible
                  rounded-full
                  bg-white
                  p-2
                  align-bottom
                  shadow
                `}
                height="38"
                width="38"
                src="/icons/preparing.png"
                alt="Durée de préparation"
              />
              <Tag
                className={`
                  bg-sky-100
                  align-super
                  text-sm
                `}
                text={`${recipe.preparationTimeInMinutes} mins`}
              />
            </p>
            <p
              data-tooltip-id="global"
              data-tooltip-content="Durée totale"
              className=""
            >
              <img
                className={`
                  mr-2
                  inline
                  overflow-visible
                  rounded-full
                  bg-white
                  p-2
                  align-bottom
                  shadow
                `}
                height="38"
                width="38"
                src="/icons/cooking.png"
                alt="Durée totale"
              />
              <Tag
                className={`
                  bg-sky-100
                  align-super
                  text-sm
                `}
                text={`${recipe.totalTimeInMinutes} mins`}
              />
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
