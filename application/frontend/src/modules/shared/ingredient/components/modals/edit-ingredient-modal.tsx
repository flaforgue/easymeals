import { useEffect, useState } from 'react';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconIngredientStorage from '#/components/icons/icon-ingredient-storage';
import Modal from '#/components/modals/modal';
import IngredientForm from '#/modules/shared/ingredient/components/forms/ingredient-form';
import { Ingredient } from '#/shared';
import { useUpdateIngredientMutation } from '#/modules/shared/ingredient/mutations';

interface EditIngredientModalProps {
  ingredient: Ingredient;
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function EditIngredientModal({ ingredient, isModalOpen, closeModal }: EditIngredientModalProps) {
  const [name, setName] = useState(ingredient.name);
  const [unitId, setUnitId] = useState(ingredient.unit.id);
  const [ingredientCategoryId, setIngredientCategoryId] = useState(ingredient.ingredientCategoryId);

  useEffect(
    () => {
      if (!isModalOpen) {
        return;
      }

      setName(ingredient.name);
      setUnitId(ingredient.unit.id);
      setIngredientCategoryId(ingredient.ingredientCategoryId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isModalOpen],
  );

  const isFormValid = name !== '' && unitId !== '' && ingredientCategoryId !== '';

  const mutation = useUpdateIngredientMutation();
  const updateIngredient = () => {
    mutation.mutate(
      {
        id: ingredient.id,
        name: name,
        unitId: unitId,
        ingredientCategoryId: ingredientCategoryId,
      },
      {
        onSuccess: closeModal,
      },
    );
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onCancel={closeModal}
      size="small"
    >
      <div className="p-2">
        <div
          className={`
            text-center
            text-lg
          `}
        >
          Modification de l&apos;ingrédient
        </div>
        <div className="mt-4">
          <div
            className={`
              mb-4
              h-40
              rounded-full
              bg-slate-50
              p-2
              text-sky-500
            `}
          >
            <IconIngredientStorage />
          </div>
          <IngredientForm
            name={name}
            setName={setName}
            unitId={unitId}
            setUnitId={setUnitId}
            ingredientCategoryId={ingredientCategoryId}
            setIngredientCategoryId={setIngredientCategoryId}
          />
        </div>
        <div
          className={`
            mt-6
            text-center
          `}
        >
          <DefaultButton
            onClick={closeModal}
            className="mr-2"
          >
            Annuler
          </DefaultButton>
          <SubmitButton
            onClick={updateIngredient}
            isDisabled={!isFormValid}
          >
            Mettre à jour
          </SubmitButton>
        </div>
      </div>
    </Modal>
  );
}
