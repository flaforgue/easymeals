import CreateActionButton from '#/components/buttons/action-buttons/create-action-button';
import CreateMealModal from '#/modules/planning/meal/components/modals/create-meal-modal';
import { MealType } from '#/shared';
import { useState } from 'react';

interface CreateMealButtonProps {
  date: Date;
  mealType: MealType;
}

export default function CreateMealButton({ date, mealType }: CreateMealButtonProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <div
        className={`
          block
          w-full
          text-center
        `}
      >
        <CreateActionButton
          onClick={openModal}
          icon="add"
          label="Repas"
          tooltipText="Définir vos repas à partir d'ici"
        />
      </div>
      <CreateMealModal
        isOpen={isModalOpened}
        onCancel={closeModal}
        initialMealDate={date}
        initialMealType={mealType}
      />
    </>
  );
}
