import { MealsByTypesByDates } from '#/modules/planning/meal/queries';
import { Meal } from '#/shared';

export function createDateHavingDaysOffset(initialDate: Date, nbDaysToAdd: number) {
  const newDate = new Date(initialDate.getTime());
  newDate.setDate(initialDate.getDate() + nbDaysToAdd);

  return newDate;
}

export function createUTCTodayMidnightDate() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  return today;
}

export function getDateKey(date: Date): number {
  return date.getTime();
}

export function getDiffInDays(date1: Date, date2: Date) {
  const diff = date2.getTime() - date1.getTime();

  return Math.round(diff / (1000 * 3600 * 24));
}

function buildEmptyMealsByTypesByDates(dateFrom: Date, dateTo: Date): MealsByTypesByDates {
  const mealsByTypesByDates: MealsByTypesByDates = {};
  for (let date = dateFrom; date <= dateTo; date = createDateHavingDaysOffset(date, 1)) {
    mealsByTypesByDates[getDateKey(date)] = {
      lunch: null,
      dinner: null,
    };
  }

  return mealsByTypesByDates;
}

export function buildMealsByTypesByDates(meals: Meal[], dateFrom: Date, dateTo: Date): MealsByTypesByDates {
  const mealsByDatesAndTypes: MealsByTypesByDates = buildEmptyMealsByTypesByDates(dateFrom, dateTo);

  for (const meal of meals ?? []) {
    mealsByDatesAndTypes[getDateKey(new Date(meal.date))][meal.mealType] = meal;
  }

  return mealsByDatesAndTypes;
}
