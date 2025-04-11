import PrintedMeals from '#/modules/planning/meal/components/print/printed-meals';
import { useEffect, useState } from 'react';
import { useMealsByIds } from '#/modules/planning/meal/queries';
import { Meal } from '#/shared';
import RoundedEditActionButton from '#/components/buttons/rounded-buttons/rounded-edit-action-button';

function areAllMealsReady(meals: (Meal | undefined)[]): meals is Meal[] {
  return !meals.includes(undefined);
}

interface PrintSelectedMealsButtonProps {
  mealIds: string[];
}

export default function PrintSelectedMealsButton({ mealIds }: PrintSelectedMealsButtonProps) {
  const meals = useMealsByIds(mealIds);
  const isMealsListEmpty = mealIds.length === 0;
  const isMealListReady = areAllMealsReady(meals);

  const [isPrintRequested, setIsPrintRequested] = useState(false);
  const requestMealsListPrint = () => {
    if (!isPrintRequested) {
      setIsPrintRequested(true);
    }
  };
  const printWhenReady = () => {
    if (isPrintRequested && isMealListReady) {
      window.print();
      setIsPrintRequested(false);
    }
  };
  useEffect(printWhenReady, [isMealListReady, isPrintRequested, meals]);

  return (
    <>
      <div
        className="print:hidden"
        data-tooltip-id="global"
        data-tooltip-content={
          isMealsListEmpty ? 'Veuillez sélectionner au moins un repas' : 'Imprimer les repas sélectionnés'
        }
      >
        <RoundedEditActionButton
          icon={isPrintRequested ? 'spinning-loader' : 'print'}
          onClick={requestMealsListPrint}
          isDisabled={isMealsListEmpty}
        />
      </div>
      <PrintedMeals meals={isMealListReady ? meals : []} />
    </>
  );
}
