import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import LabeledNumberInput from '#/components/inputs/labeled-number-input';
import DeleteModal from '#/components/modals/delete-modal';
import useDebouncedCallback from '#/hooks/use-debounced-callback';
import QuantifiedIngredientLabel from '#/modules/shared/ingredient/components/quantified-ingredient-label';
import { getIncrementValue } from '#/modules/shared/ingredient/utils';
import { QuantifiedIngredient } from '#/shared';
import { logError } from '#/utils/error';
import { useEffect, useState } from 'react';

interface EditableQuantifiedIngredientProps {
  quantifiedIngredient: QuantifiedIngredient;
  onDelete: (id: string) => Promise<void>;
  onQuantityUpdate: (id: string, newQuantity: number) => void;
}

export default function EditableQuantifiedIngredient({
  quantifiedIngredient,
  onDelete,
  onQuantityUpdate,
}: EditableQuantifiedIngredientProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  const [quantity, setQuantity] = useState(quantifiedIngredient.quantity);
  useEffect(() => {
    setQuantity(quantifiedIngredient.quantity);
  }, [quantifiedIngredient.quantity]);
  const updateQuantity = () => {
    if (quantity === quantifiedIngredient.quantity) {
      return;
    }

    onQuantityUpdate(quantifiedIngredient.id, quantity);
  };
  const debouncedUpdateQuantity = useDebouncedCallback(updateQuantity, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(debouncedUpdateQuantity, [quantity]);

  const deleteIngredient = () => {
    setIsDeleting(true);
    onDelete(quantifiedIngredient.id)
      .then(() => {
        setIsDeleting(false);
        closeModal();
      })
      .catch(logError);
  };

  return (
    <>
      <DeleteModal
        isOpen={isModalOpened}
        body="Êtes-vous sûr(e) de vouloir retirer cet ingrédient ?"
        isSubmitting={isDeleting}
        onConfirm={deleteIngredient}
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
          <QuantifiedIngredientLabel
            className="ml-1"
            quantifiedIngredient={quantifiedIngredient}
            shouldRoundQuantity={false}
          />
        </div>
        <LabeledNumberInput
          value={quantity}
          onChange={setQuantity}
          innerLabel={quantifiedIngredient.unitName}
          incrementValue={getIncrementValue(quantifiedIngredient.unitCode)}
        />
      </div>
    </>
  );
}
