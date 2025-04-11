import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import DeleteModal from '#/components/modals/delete-modal';
import { useDeleteProductMutation } from '#/modules/shopping/product/mutations';
import { useState } from 'react';

interface DeleteProductButton {
  productId: string;
}

export default function DeleteProductButton({ productId }: DeleteProductButton) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useDeleteProductMutation();
  const deleteProduct = () => {
    mutation.mutate(
      {
        id: productId,
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
        body="Êtes-vous sûr(e) de vouloir supprimer ce produit ?"
        isSubmitting={mutation.isPending}
        onConfirm={deleteProduct}
        onCancel={closeModal}
      />
    </>
  );
}
