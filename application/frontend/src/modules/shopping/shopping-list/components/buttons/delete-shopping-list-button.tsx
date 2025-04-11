import DeleteModal from '#/components/modals/delete-modal';
import { useState } from 'react';
import { useDeleteShoppingListMutation } from '#/modules/shopping/shopping-list/mutations';
import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';

interface DeleteShoppingListButtonProps {
  shoppintListId: string;
}

export default function DeleteShoppingListButton({ shoppintListId }: DeleteShoppingListButtonProps) {
  const mutation = useDeleteShoppingListMutation();
  const deleteShoppingList = () => {
    mutation.mutate({ id: shoppintListId });
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
        className="bg-white"
      />
      <DeleteModal
        isOpen={isModalOpened}
        body="Voulez-vous vraiment supprimer cette liste de courses ? Cette action est irréversible."
        isSubmitting={mutation.isPending}
        onConfirm={deleteShoppingList}
        onCancel={closeModal}
      />
    </>
  );
}
