import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import NumberInput from '#/components/inputs/number-input';
import DeleteModal from '#/components/modals/delete-modal';
import useDebouncedCallback from '#/hooks/use-debounced-callback';
import { QuantifiedProduct } from '#/shared';
import { logError } from '#/utils/error';
import { useEffect, useState } from 'react';

interface EditableQuantifiedProductProps {
  quantifiedProduct: QuantifiedProduct;
  onDelete: (id: string) => Promise<void>;
  onQuantityUpdate: (id: string, newQuantity: number) => void;
}

export default function EditableQuantifiedProduct({
  quantifiedProduct,
  onDelete,
  onQuantityUpdate,
}: EditableQuantifiedProductProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  const [quantity, setQuantity] = useState(quantifiedProduct.quantity);
  const updateQuantity = () => {
    if (quantity === quantifiedProduct.quantity) {
      return;
    }

    onQuantityUpdate(quantifiedProduct.id, quantity);
  };
  const debouncedUpdateQuantity = useDebouncedCallback(updateQuantity, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(debouncedUpdateQuantity, [quantity]);

  const deleteProduct = () => {
    setIsSubmitting(true);
    onDelete(quantifiedProduct.id)
      .then(() => {
        setIsSubmitting(false);
        closeModal();
      })
      .catch(logError);
  };

  return (
    <>
      <DeleteModal
        isOpen={isModalOpened}
        body="Êtes-vous sûr(e) de vouloir retirer ce produit ?"
        isSubmitting={isSubmitting}
        onConfirm={deleteProduct}
        onCancel={closeModal}
      />
      <div
        className={`
          flex
          items-center
          justify-between
          gap-4
        `}
      >
        <div
          className={`
            flex
            items-center
          `}
        >
          <DeleteIconButton onClick={openModal} />
          <span className="ml-2">
            <span
              className={`
                mr-1
                font-bold
              `}
            >
              {quantifiedProduct.quantity}
            </span>
            {quantifiedProduct.name}
          </span>
        </div>
        <NumberInput
          value={quantity}
          onChange={setQuantity}
        />
      </div>
    </>
  );
}
