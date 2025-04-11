import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import { Meal } from '#/shared';

interface MealCardGhostProps {
  meal: Meal | null;
}

export default function MealCardGhost({ meal }: MealCardGhostProps) {
  return (
    <div
      className={`
        flex
        h-full
        flex-col
        items-center
        opacity-50
      `}
    >
      <div
        className={`
          w-full
          overflow-hidden
          rounded-t
        `}
      >
        <img
          src={meal?.recipe.illustrationUrl ?? DEFAULT_RECIPE_ILLUSTRATION_URL}
          className={`
            h-full
            w-full
            object-cover
            object-center
          `}
        />
      </div>
      <div
        className={`
          flex
          w-full
          flex-col
          justify-between
          rounded-b
          bg-white
          p-2
          shadow
        `}
      >
        <div
          className={`
            flex
            w-full
            flex-wrap
            justify-between
            gap-x-4
          `}
        >
          <div
            className={`
              flex
              flex-1
              items-center
              justify-center
            `}
          >
            <img
              src="/icons/nb-portions.png"
              width="20"
              className={`
                mr-2
                inline
              `}
              alt="Nombre de personnes"
            />
            <span
              className={`
                align-middle
                text-slate-500
              `}
            >
              {meal?.nbPortions}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
