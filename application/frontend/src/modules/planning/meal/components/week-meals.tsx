import { createDateHavingDaysOffset, getDateKey } from '#/modules/planning/meal/utils';
import DayMeals from '#/modules/planning/meal/components/day-meals';
import { MealsByTypesByDates } from '#/modules/planning/meal/queries';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Meal, MealType } from '#/shared';
import { useEffect, useState } from 'react';
import { useMoveMealMutation } from '#/modules/planning/meal/mutations';
import { DraggableMealData, DroppableMealData } from '#/modules/planning/meal/hooks/use-meal-drag-and-drop';

interface WeekMealsProps {
  activeDate: Date;
  meals: MealsByTypesByDates;
  shoppingListMealIds: string[];
  toggleShoppingListMealId: (mealId: string) => void;
}

export default function WeekMeals({
  activeDate,
  meals,
  shoppingListMealIds,
  toggleShoppingListMealId,
}: WeekMealsProps) {
  const [localMeals, setLocalMeals] = useState<MealsByTypesByDates>(meals);
  useEffect(() => setLocalMeals(meals), [meals]);

  const moveMealMutation = useMoveMealMutation();
  const moveLocalMeal = (meal: Meal, newMealDate: number, newMealType: MealType): void => {
    const newDate = new Date(newMealDate);
    newDate.setUTCHours(0, 0, 0, 0);

    const newMeals = {
      ...localMeals,
    };
    const replacedMeal = newMeals[newDate.getTime()][newMealType];
    newMeals[newDate.getTime()][newMealType] = meal;
    newMeals[meal.date][meal.mealType] = replacedMeal;

    setLocalMeals(newMeals);

    moveMealMutation.mutate({
      mealId: meal.id,
      newMealType: newMealType,
      newDate: newDate,
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const activeData = event.active?.data.current as DraggableMealData;
    const overData = event.over?.data.current as DroppableMealData;
    if (activeData.meal.date === overData.date && activeData.meal.mealType === overData.mealType) {
      return;
    }

    moveLocalMeal(event.active.data.current?.meal as Meal, overData.date, overData.mealType);
  };

  const weekDates = [
    createDateHavingDaysOffset(activeDate, -2),
    createDateHavingDaysOffset(activeDate, -1),
    activeDate,
    createDateHavingDaysOffset(activeDate, +1),
    createDateHavingDaysOffset(activeDate, +2),
  ];

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <section
        className={`
          grid
          w-max
          grid-cols-5
          gap-2

          tablet:w-full
        `}
      >
        {weekDates.map((date) => (
          <div
            className={`
              w-48

              tablet:w-auto
            `}
            key={date.getTime()}
          >
            <DayMeals
              date={date}
              meals={localMeals[getDateKey(date)] ?? null}
              shoppingListMealIds={shoppingListMealIds}
              toggleShoppingListMealId={toggleShoppingListMealId}
              isDragDisabled={moveMealMutation.isPending}
            />
          </div>
        ))}
      </section>
    </DndContext>
  );
}
