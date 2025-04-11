import DeleteModal from '#/components/modals/delete-modal';
import { useDeleteRecipeMutation } from '#/modules/cooking/recipe/mutations';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';

interface DeleteRecipeButtonProps {
  recipeId: string;
}

export default function DeleteRecipeButton({ recipeId }: DeleteRecipeButtonProps) {
  const navigate = useNavigate();
  const mutation = useDeleteRecipeMutation();
  const deleteRecipe = () => {
    mutation.mutate({ id: recipeId }, { onSettled: () => navigate('/app/recipes') });
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
        size="large"
      />
      <DeleteModal
        isOpen={isModalOpened}
        body="Voulez-vous vraiment supprimer cette recette ? Cette action est irréversible."
        isSubmitting={mutation.isPending}
        onConfirm={deleteRecipe}
        onCancel={closeModal}
      />
    </>
  );
}
