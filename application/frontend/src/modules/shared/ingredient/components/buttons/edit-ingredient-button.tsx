import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';
import EditIngredientModal from '#/modules/shared/ingredient/components/modals/edit-ingredient-modal';
import { Ingredient } from '#/shared';
import { useState } from 'react';

interface EditIngredientButton {
  ingredient: Ingredient;
}

export default function EditIngredientButton({ ingredient }: EditIngredientButton) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <EditIconButton onClick={openModal} />
      <EditIngredientModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        ingredient={ingredient}
      />
    </>
  );
}
