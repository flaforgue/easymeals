import { useEffect, useState } from 'react';
import CreateButton from '#/components/buttons/simple-buttons/create-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconIngredientStorage from '#/components/icons/icon-ingredient-storage';
import Modal from '#/components/modals/modal';
import IngredientForm from '#/modules/shared/ingredient/components/forms/ingredient-form';
import { useCreateIngredientMutation } from '#/modules/shared/ingredient/mutations';
import { uuidv4 } from '#/shared';

interface CreateIngredientModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  afterIngredientCreated?: (ingredientId: string) => void;
  initialName?: string;
}

export default function CreateIngredientModal({
  isModalOpen,
  closeModal,
  afterIngredientCreated,
  initialName = '',
}: CreateIngredientModalProps) {
  const [name, setName] = useState('');
  const [unitId, setUnitId] = useState('');
  const [ingredientCategoryId, setIngredientCategoryId] = useState('');

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const isFormValid = name !== '' && unitId !== '' && ingredientCategoryId !== '';
  const decoratedCloseModal = () => {
    setName('');
    closeModal();
  };

  const mutation = useCreateIngredientMutation();
  const createIngredient = () => {
    mutation.mutate(
      {
        id: uuidv4(),
        name: name,
        unitId: unitId,
        ingredientCategoryId: ingredientCategoryId,
      },
      {
        onSuccess: (_data, variables) => {
          decoratedCloseModal();
          afterIngredientCreated?.(variables.id);
          setName('');
        },
      },
    );
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onCancel={decoratedCloseModal}
      size="small"
    >
      <div className="p-2">
        <div
          className={`
            text-center
            text-lg
          `}
        >
          Nouvel ingrédient
        </div>
        <div className="mt-4">
          <div
            className={`
              mb-4
              h-40
              rounded-full
              bg-slate-50
              p-2
              text-green-500
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
            onClick={decoratedCloseModal}
            className="mr-2"
          >
            Annuler
          </DefaultButton>
          <CreateButton
            onClick={createIngredient}
            isDisabled={!isFormValid}
            tooltipText={isFormValid ? '' : "Veuillez donner un nom à l'ingrédient"}
          >
            Ajouter
          </CreateButton>
        </div>
      </div>
    </Modal>
  );
}
