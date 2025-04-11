import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import DeleteModal from '#/components/modals/delete-modal';
import { useDeleteIngredientMutation } from '#/modules/shared/ingredient/mutations';
import { useState } from 'react';

interface DeleteIngredientButton {
  ingredientId: string;
}

export default function DeleteIngredientButton({ ingredientId }: DeleteIngredientButton) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useDeleteIngredientMutation();
  const deleteIngredient = () => {
    mutation.mutate(
      {
        id: ingredientId,
      },
      {
        onSuccess: closeModal,
      },
    );
  };

  return (
    <>
      <DeleteIconButton onClick={openModal} />
      <DeleteModal
        isOpen={isModalOpen}
        body="Cet ingrédient sera aussi supprimé de toutes les recettes qui l'utilisent. Êtes-vous sûr(e) de vouloir supprimer cet ingrédient ?"
        isSubmitting={mutation.isPending}
        onConfirm={deleteIngredient}
        onCancel={closeModal}
      />
    </>
  );
}
