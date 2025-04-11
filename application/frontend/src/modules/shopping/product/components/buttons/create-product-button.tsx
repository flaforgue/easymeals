import { useState } from 'react';
import RoundedCreateActionButton from '#/components/buttons/rounded-buttons/rounded-create-action-button';
import ProductFormModal from '#/modules/shopping/product/components/product-form-modal';
import { useCreateProductMutation } from '#/modules/shopping/product/mutations';
import { uuidv4 } from '#/shared';

export default function CreateProductButton() {
  const [name, setName] = useState('');
  const [productCategoryId, setProductCategoryId] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useCreateProductMutation();
  const createProduct = () => {
    return mutation.mutateAsync(
      {
        id: uuidv4(),
        name: name,
        productCategoryId: productCategoryId,
      },
      {
        onSuccess: () => setName(''),
      },
    );
  };

  return (
    <>
      <RoundedCreateActionButton
        onClick={openModal}
        icon="add"
        tooltipText="Ajouter un produit"
      />
      <ProductFormModal
        submitType="create"
        isModalOpen={isModalOpen}
        onCloseModal={closeModal}
        onSubmit={createProduct}
        name={name}
        setName={setName}
        productCategoryId={productCategoryId}
        setProductCategoryId={setProductCategoryId}
      />
    </>
  );
}
