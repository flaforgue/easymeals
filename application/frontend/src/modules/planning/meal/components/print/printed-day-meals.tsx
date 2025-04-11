import LinedTitle from '#/components/lined-title';
import { DAY_LABELS, MEAL_LABELS, mealTypes } from '#/modules/planning/meal/constants';
import { MealsByTypes } from '#/modules/planning/meal/queries';

interface PrintedDayMealsProps {
  date: Date;
  mealsByType: MealsByTypes;
}
export default function PrintedDayMeals({ date, mealsByType }: PrintedDayMealsProps) {
  return (
    <div
      className={`
        h-min
        rounded
        border
        px-2
        py-4
        text-center
      `}
    >
      <div>{`${DAY_LABELS[date.getDay()]} ${date.getDate()}`}</div>
      {mealTypes.map((mealType) => {
        const meal = mealsByType[mealType];

        return (
          <div
            key={mealType}
            className="h-[100px]"
          >
            <LinedTitle
              className={`
                mb-2
                mt-4
                text-sm
              `}
              title={MEAL_LABELS[mealType]}
            />
            <div
              className={`
                mb-4
                text-xs
              `}
            >
              {meal?.recipe.name.substring(0, 35)}
            </div>
            <div
              className={`
                flex
                justify-center
                gap-6
                text-xs
              `}
            >
              <div
                className={`
                  flex
                  items-center
                `}
              >
                <img
                  src="/icons/print-nb-portions.png"
                  width="15"
                  className={`
                    mr-1
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
              <div
                className={`
                  flex
                  items-center
                `}
              >
                <img
                  src="/icons/print-total-time.png"
                  width="15"
                  className={`
                    mr-1
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
        );
      })}
    </div>
  );
}
