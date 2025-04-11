import { Meal, MealType } from '#/shared';
import { buildMealsByTypesByDates, createDateHavingDaysOffset, getDiffInDays } from '#/modules/planning/meal/utils';
import { useEffect, useState } from 'react';
import { findMeal, listMeals } from '#/modules/planning/meal/api';
import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';

export enum MealsQueryKey {
  List = 'meals',
  Find = 'meal',
}

export type MealsByTypes = Record<MealType, null | Meal>;
export type MealsByTypesByDates = Record<number, MealsByTypes>;

export function useMeals(activeDate: Date) {
  const queryClient = useQueryClient();
  const [dateFrom, setDateFrom] = useState(createDateHavingDaysOffset(activeDate, -10));
  useEffect(() => {
    if (getDiffInDays(dateFrom, activeDate) <= 4) {
      setDateFrom(createDateHavingDaysOffset(activeDate, -10));
    }
  }, [activeDate, dateFrom]);
  const [dateTo, setDateTo] = useState(createDateHavingDaysOffset(activeDate, 10));
  useEffect(() => {
    if (getDiffInDays(activeDate, dateTo) <= 4) {
      setDateTo(createDateHavingDaysOffset(activeDate, 10));
    }
  }, [activeDate, dateTo]);

  const { data } = useQuery({
    queryKey: [MealsQueryKey.List, dateFrom, dateTo],
    staleTime: 5 * 60 * 1000,
    queryFn: () => {
      return listMeals({
        dateFrom: dateFrom,
        dateTo: dateTo,
      });
    },
  });

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    for (const meal of data) {
      queryClient.setQueryData([MealsQueryKey.Find, meal.id], meal);
    }
  }, [queryClient, data]);

  if (data === undefined) {
    return {};
  }

  return buildMealsByTypesByDates(data ?? [], dateFrom, dateTo);
}

export function useMealsByIds(ids: string[]) {
  const mealQueries = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: [MealsQueryKey.Find, id],
        staleTime: 5 * 60 * 1000,
        queryFn: () => findMeal({ id: id }),
      };
    }),
  });

  return mealQueries.map((mealQuery) => mealQuery.data);
}
