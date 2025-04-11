import { FAST_RECIPE_MAX_TOTAL_TIME } from '#/shared';
import { Recipe } from '#/shared';
import { getItemById } from '#/utils/array';
import { useCuisineTypes } from '#/modules/cooking/cuisine-type/queries';
import Badge from '#/components/badge';

type Size = 'small' | 'medium' | 'large';

interface RecipeBadgesProps {
  recipe: Recipe;
  size: Size;
}

const sizeStyles: Record<Size, string> = {
  small: 'w-[35px] h-[35px] ml-1 first:ml-0',
  medium: 'w-[45px] h-[45px] ml-2 first:ml-0',
  large: 'w-[55px] h-[55px] ml-3 first:ml-0',
};

export default function RecipeBadges({ recipe, size }: RecipeBadgesProps) {
  const sizeStyle = sizeStyles[size];
  const cuisineTypes = useCuisineTypes();
  const cuisineType = getItemById(cuisineTypes, recipe.cuisineTypeId);
  const cuisineTypeName = cuisineType?.name;
  const cuisineTypeIllustrationUrl = cuisineType?.illustrationUrl;
  const isFast = recipe.totalTimeInMinutes <= FAST_RECIPE_MAX_TOTAL_TIME;

  return (
    <>
      <div
        className={`
          ${sizeStyle}

          inline-block
        `}
      >
        <Badge tooltipText={cuisineTypeName}>
          <img
            className="p-2"
            src={cuisineTypeIllustrationUrl}
          />
        </Badge>
      </div>
      {recipe.houseId !== null && (
        <div
          className={`
            ${sizeStyle}

            inline-block
          `}
        >
          <Badge tooltipText="Recette personnelle">
            <img
              className="p-2.5"
              src="/icons/user-recipe.png"
            />
          </Badge>
        </div>
      )}
      {recipe.isVegetarian && (
        <div
          className={`
            ${sizeStyle}

            inline-block
          `}
        >
          <Badge tooltipText="Végétarien">
            <img
              className="p-2"
              src="/icons/vegetarian.png"
            />
          </Badge>
        </div>
      )}
      {isFast && (
        <div
          className={`
            ${sizeStyle}

            inline-block
          `}
        >
          <Badge tooltipText="Recette rapide">
            <img
              className="p-2"
              src="/icons/fast.png"
            />
          </Badge>
        </div>
      )}
    </>
  );
}
