export interface AddMealsToShoppingListModalProps {
  isOpen: boolean;
  onCancel: () => void;
  mealIds: string[];
}

import IconQuestion from '#/components/icons/icon-question';
import Modal from '#/components/modals/modal';
import GlobalLoadingOverlay from '#/components/overlays/global-loading-overlay';
import {
  useCreateShoppingListMutation,
  useAddMealsToShoppingListMutation,
} from '#/modules/shopping/shopping-list/mutations';
import { useNavigate } from 'react-router-dom';
import { useLatestShoppingListId } from '#/modules/shopping/shopping-list/queries';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import CreateButton from '#/components/buttons/simple-buttons/create-button';
import { uuidv4 } from '#/shared';

export default function AddMealsToShoppingListModal({ isOpen, onCancel, mealIds }: AddMealsToShoppingListModalProps) {
  const navigate = useNavigate();
  const latestShoppingListId = useLatestShoppingListId();
  const hasLatestShoppingListId = latestShoppingListId !== undefined;
  const createShoppingListMutation = useCreateShoppingListMutation();
  const addMealsToShoppingListMutation = useAddMealsToShoppingListMutation();
  const isSubmitting = createShoppingListMutation.isPending || addMealsToShoppingListMutation.isPending;
  const onSuccess = (id: string) => navigate(`/app/shopping-lists/${id}/edit`);
  const addMealsToLatestShoppingList = () => {
    if (latestShoppingListId === undefined) {
      return;
    }

    addMealsToShoppingListMutation.mutate(
      {
        shoppingListId: latestShoppingListId,
        mealIds: mealIds,
      },
      {
        onSuccess: (_data, variables) => onSuccess(variables.shoppingListId),
      },
    );
  };
  const addMealsToNewShoppingList = () => {
    const shoppingListId = uuidv4();
    const inputs = {
      id: shoppingListId,
      name: `Liste générée du ${new Date().toLocaleDateString()}`,
    };

    createShoppingListMutation.mutate(inputs, {
      onSuccess: () => {
        addMealsToShoppingListMutation.mutate(
          {
            shoppingListId: shoppingListId,
            mealIds: mealIds,
          },
          {
            onSuccess: (_data, variables) => onSuccess(variables.shoppingListId),
          },
        );
      },
    });
  };

  return (
    <>
      {isSubmitting && <GlobalLoadingOverlay />}
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        size="medium"
      >
        <div
          className={`
            p-4
            text-center
          `}
        >
          <div
            className={`
              mb-6
              h-14
              text-sky-500
            `}
          >
            <IconQuestion />
          </div>

          <h3
            className={`
              mb-5
              text-lg
              font-normal
              text-slate-500
            `}
          >
            Souhaitez-vous ajouter les ingrédients à votre dernière liste de courses ou en créer une nouvelle ?
          </h3>

          <div
            className={`
              flex
              flex-col-reverse
              items-center
              justify-center
              gap-4

              tablet:flex-row
            `}
          >
            <DefaultButton onClick={onCancel}>Annuler</DefaultButton>
            {hasLatestShoppingListId && (
              <SubmitButton onClick={addMealsToLatestShoppingList}>Ma dernière liste</SubmitButton>
            )}
            <CreateButton onClick={addMealsToNewShoppingList}>Une nouvelle liste</CreateButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
