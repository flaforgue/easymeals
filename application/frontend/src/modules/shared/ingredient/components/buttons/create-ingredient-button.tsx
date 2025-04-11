import { useState } from 'react';
import RoundedCreateActionButton from '#/components/buttons/rounded-buttons/rounded-create-action-button';
import CreateIngredientModal from '#/modules/shared/ingredient/components/modals/create-ingredient-modal';

export default function CreateIngredientButton() {
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
      <RoundedCreateActionButton
        onClick={openModal}
        icon="add"
        tooltipText="Ajouter un ingrédient"
      />
      <CreateIngredientModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}
