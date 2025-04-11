import { createDateHavingDaysOffset, createUTCTodayMidnightDate, getDateKey } from '#/modules/planning/meal/utils';
import { useEffect, useRef, useState } from 'react';
import CreateShoppingListButton from '#/modules/shopping/shopping-list/components/buttons/create-shopping-list-button';
import RoundedDefaultActionButton from '#/components/buttons/rounded-buttons/rounded-default-action-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconBack from '#/components/icons/icon-back';
import IconForward from '#/components/icons/icon-forward';
import WeekMeals from '#/modules/planning/meal/components/week-meals';
import { useMeals } from '#/modules/planning/meal/queries';
import PrintSelectedMealsButton from '#/modules/planning/meal/components/buttons/print-selected-meals-button';
import FloatingActionButtonContainer from '#/components/floating-action-button-container';
import { mealTypes } from '#/modules/planning/meal/constants';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';

export default function ListMeals() {
  const weekMealsContainerRef = useRef<HTMLDivElement>(null);
  const defaultDate = createDateHavingDaysOffset(createUTCTodayMidnightDate(), 2);
  const [activeDate, setActiveDate] = useState(defaultDate);
  const meals = useMeals(activeDate);
  const resetActiveDate = () => setActiveDate(defaultDate);
  const incrementActiveDate = () => {
    setActiveDate(createDateHavingDaysOffset(activeDate, 1));
  };
  const decrementActiveDate = () => {
    setActiveDate(createDateHavingDaysOffset(activeDate, -1));
  };
  useEffect(() => {
    if (weekMealsContainerRef.current === null) {
      return;
    }

    weekMealsContainerRef.current.style.opacity = '0.5';
    const timeoutRef = setTimeout(() => {
      if (weekMealsContainerRef.current === null) {
        return;
      }

      weekMealsContainerRef.current.style.opacity = '1';
    }, 100);

    return () => clearTimeout(timeoutRef);
  }, [activeDate]);

  const [shoppingListMealIds, setShoppingListMealIds] = useState<string[]>([]);
  const addMealIdToShoppingList = (mealId: string) => {
    setShoppingListMealIds([...shoppingListMealIds, mealId]);
  };
  const removeMealIdToShoppingList = (mealId: string) => {
    setShoppingListMealIds(shoppingListMealIds.filter((id) => id !== mealId));
  };
  const toggleShoppingListMealId = (mealId: string) => {
    if (shoppingListMealIds.includes(mealId)) {
      removeMealIdToShoppingList(mealId);
    } else {
      addMealIdToShoppingList(mealId);
    }
  };

  const selectAllVisibleMeals = () => {
    const mealToSelectIds = [];
    const visibleDates = [
      createDateHavingDaysOffset(activeDate, -2),
      createDateHavingDaysOffset(activeDate, -1),
      activeDate,
      createDateHavingDaysOffset(activeDate, +1),
      createDateHavingDaysOffset(activeDate, +2),
    ];

    for (const visibleDate of visibleDates) {
      for (const mealType of mealTypes) {
        const mealId = meals[getDateKey(visibleDate)]?.[mealType]?.id;
        if (mealId !== undefined) {
          mealToSelectIds.push(mealId);
        }
      }
    }

    setShoppingListMealIds(mealToSelectIds);
  };

  const clearShoppingList = () => setShoppingListMealIds([]);
  const isShoppingListEmpty = shoppingListMealIds.length === 0;

  if (Object.keys(meals).length === 0) {
    return <MainContentLoadingOverlay />;
  }

  return (
    <section
      className={`
        min-w-screen
        -m-4
        flex
        flex-col-reverse
        gap-4
        px-4
        pb-16
        pt-4

        tablet:flex-none
      `}
    >
      <div
        ref={weekMealsContainerRef}
        className={`
          w-full
          overflow-scroll
          pb-4
          transition-opacity
          duration-100

          tablet:overflow-visible
          tablet:pb-0

          print:hidden
        `}
      >
        <WeekMeals
          activeDate={activeDate}
          meals={meals}
          shoppingListMealIds={shoppingListMealIds}
          toggleShoppingListMealId={toggleShoppingListMealId}
        />
      </div>
      <div
        className={`
          screen:flex
          screen:h-10
          screen:items-center
          screen:justify-between
        `}
      >
        <img
          className={`
            hidden
            max-h-24

            screen:tablet:block
          `}
          src="/images/bon-appetit.jpg"
        />
        <div
          className={`
            flex
            h-6
            w-full
            items-center
            justify-center

            laptop:justify-end

            print:hidden
          `}
        >
          <DefaultButton onClick={decrementActiveDate}>
            <IconBack />
          </DefaultButton>
          <DefaultButton
            onClick={resetActiveDate}
            className="mx-2"
          >
            <p className="p-0.5">Aujourd&apos;hui</p>
          </DefaultButton>
          <DefaultButton onClick={incrementActiveDate}>
            <IconForward />
          </DefaultButton>
        </div>
        <FloatingActionButtonContainer>
          <div
            className={`
              flex
              items-center
              gap-2
            `}
          >
            <div
              className="print:hidden"
              data-tooltip-id="global"
              data-tooltip-content={isShoppingListEmpty ? 'Tout sélectionner' : 'Tout décocher'}
            >
              <RoundedDefaultActionButton
                icon={isShoppingListEmpty ? 'check' : 'cross'}
                onClick={isShoppingListEmpty ? selectAllVisibleMeals : clearShoppingList}
              />
            </div>
            <PrintSelectedMealsButton mealIds={shoppingListMealIds} />
            <CreateShoppingListButton mealIds={shoppingListMealIds} />
          </div>
        </FloatingActionButtonContainer>
      </div>
    </section>
  );
}
