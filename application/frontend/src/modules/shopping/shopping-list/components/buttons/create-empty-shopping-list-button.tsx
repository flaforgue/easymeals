import RoundedCreateActionButton from '#/components/buttons/rounded-buttons/rounded-create-action-button';
import { useCreateShoppingListMutation } from '#/modules/shopping/shopping-list/mutations';
import { uuidv4 } from '#/shared';

export default function CreateEmptyShoppingListButton() {
  const createShoppingListMutation = useCreateShoppingListMutation();
  const createEmptyShoppingList = () => {
    const shoppingListId = uuidv4();
    const inputs = {
      id: shoppingListId,
      name: `Liste de courses du ${new Date().toLocaleDateString()}`,
    };

    createShoppingListMutation.mutate(inputs);
  };

  return (
    <div
      data-tooltip-id="global"
      data-tooltip-content="Créer une liste de courses"
    >
      <RoundedCreateActionButton
        icon="add"
        onClick={createEmptyShoppingList}
      />
    </div>
  );
}
