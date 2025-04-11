import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';
import ProductFormModal from '#/modules/shopping/product/components/product-form-modal';
import { useUpdateProductMutation } from '#/modules/shopping/product/mutations';
import { Product } from '#/shared';
import { useState } from 'react';

interface EditProductButton {
  product: Product;
}

export default function EditProductButton({ product }: EditProductButton) {
  const [name, setName] = useState(product.name);
  const [productCategoryId, setProductCategoryId] = useState(product.productCategoryId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setName(product.name);
    setProductCategoryId(product.productCategoryId);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useUpdateProductMutation();
  const updateProduct = () => {
    return mutation.mutateAsync({
      id: product.id,
      name: name,
      productCategoryId: productCategoryId,
    });
  };

  return (
    <>
      <EditIconButton onClick={openModal} />
      <ProductFormModal
        submitType="update"
        isModalOpen={isModalOpen}
        onCloseModal={closeModal}
        onSubmit={updateProduct}
        name={name}
        productCategoryId={productCategoryId}
        setName={setName}
        setProductCategoryId={setProductCategoryId}
      />
    </>
  );
}
