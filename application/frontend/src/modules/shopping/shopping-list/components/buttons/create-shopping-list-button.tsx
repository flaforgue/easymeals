import RoundedCreateActionButton from '#/components/buttons/rounded-buttons/rounded-create-action-button';
import AddMealsToShoppingListModal from '#/modules/shopping/shopping-list/components/add-meals-to-shopping-list-modal';
import { useState } from 'react';

interface CreateShoppingListButtonProps {
  mealIds: string[];
}

export default function CreateShoppingListButton({ mealIds }: CreateShoppingListButtonProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);
  const isMealsListEmpty = mealIds.length === 0;

  return (
    <div
      className="print:hidden"
      data-tooltip-id="global"
      data-tooltip-content={
        isMealsListEmpty ? 'Veuillez sélectionner au moins un repas' : 'Ajouter à ma liste de courses'
      }
    >
      <RoundedCreateActionButton
        icon="shopping"
        onClick={openModal}
        isDisabled={isMealsListEmpty}
      />
      <AddMealsToShoppingListModal
        isOpen={isModalOpened}
        onCancel={closeModal}
        mealIds={mealIds}
      />
    </div>
  );
}
