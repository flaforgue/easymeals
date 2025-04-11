import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import DeleteModal from '#/components/modals/delete-modal';
import { useDeleteRecipeInstructionMutation } from '#/modules/cooking/recipe-instruction/mutations';
import { RecipeInstruction } from '#/shared';
import { useState } from 'react';

interface DeleteRecipeInstructionButtonProps {
  recipeInstruction: RecipeInstruction;
}
export default function DeleteRecipeInstructionButton({ recipeInstruction }: DeleteRecipeInstructionButtonProps) {
  const mutation = useDeleteRecipeInstructionMutation(recipeInstruction.recipeId);
  const deleteRecipeInstruction = () => {
    mutation.mutate({ id: recipeInstruction.id });
  };

  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <DeleteIconButton
        onClick={openModal}
        className="h-8"
      />
      <DeleteModal
        isOpen={isModalOpened}
        body="Voulez-vous vraiment supprimer cette instruction ? Cette action est irréversible."
        isSubmitting={mutation.isPending}
        onConfirm={deleteRecipeInstruction}
        onCancel={closeModal}
      />
    </>
  );
}
