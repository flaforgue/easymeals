import PrintedDayMeals from '#/modules/planning/meal/components/print/printed-day-meals';
import { buildMealsByTypesByDates } from '#/modules/planning/meal/utils';
import { Meal } from '#/shared';

interface PrintedMealsProps {
  meals: Meal[];
}

export default function PrintedMeals({ meals }: PrintedMealsProps) {
  if (meals.length === 0) {
    return null;
  }

  const { dateFrom, dateTo } = meals.reduce(
    (acc, curr) => {
      if (acc.dateFrom > curr.date) {
        acc.dateFrom = curr.date;
      }

      if (acc.dateTo < curr.date) {
        acc.dateTo = curr.date;
      }

      return acc;
    },
    { dateFrom: meals[0].date, dateTo: meals[0].date },
  );
  const mealsByTypesByDates = buildMealsByTypesByDates(meals, new Date(dateFrom), new Date(dateTo));

  const mealComponents = [];
  for (const mealDateKey in mealsByTypesByDates) {
    const mealDate = new Date(parseInt(mealDateKey, 10));
    const dayMealsByType = mealsByTypesByDates[mealDateKey];
    mealComponents.push(
      <div key={mealDateKey}>
        <PrintedDayMeals
          mealsByType={dayMealsByType}
          date={mealDate}
        />
      </div>,
    );
  }

  return (
    <div
      className={`
        grid
        h-[calc(100vh-2rem)]
        w-[calc(100vw-2rem)]
        grid-cols-5
        gap-4

        screen:hidden
      `}
    >
      {mealComponents.length > 5 ? null : (
        <div
          className={`
            col-span-full
            h-60
          `}
        >
          <img
            src="/images/print-easymeals.png"
            className={`
              m-auto
              h-1/2
            `}
          />

          <img
            src="/images/bon-appetit.jpg"
            className={`
              m-auto
              h-1/2
            `}
          />
        </div>
      )}
      {mealComponents}
    </div>
  );
}
