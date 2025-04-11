import EditLinkButton from '#/components/buttons/link-buttons/edit-link-button';
import TextInput from '#/components/inputs/text-input';
import DeleteShoppingListButton from '#/modules/shopping/shopping-list/components/buttons/delete-shopping-list-button';
import { useUpdateShoppingListMutation } from '#/modules/shopping/shopping-list/mutations';
import { stopPropagation } from '#/utils/events';
import { ShoppingList, UpdateShoppingListCommand } from '#/shared';
import useDebouncedCallback from '#/hooks/use-debounced-callback';
import useAutoSavedState from '#/hooks/use-autosaved-state';

interface EditableShoppingListHeaderProps {
  shoppingList: ShoppingList;
  isOpen: boolean;
}
export default function EditableShoppingListHeader({ shoppingList, isOpen }: EditableShoppingListHeaderProps) {
  const mutation = useUpdateShoppingListMutation();
  const updateShoppingList = (inputs: Omit<UpdateShoppingListCommand, 'id'>) => {
    if (shoppingList.name === inputs.name) {
      return;
    }

    mutation.mutate({
      ...inputs,
      id: shoppingList.id,
    });
  };
  const debouncedUpdateShoppingList = useDebouncedCallback(updateShoppingList, 1000);
  const autoSaveShoppingList = () => {
    debouncedUpdateShoppingList({
      name: name,
    });
  };
  const [name, setName] = useAutoSavedState(shoppingList.name, autoSaveShoppingList);

  const isEmpty = shoppingList.ingredients.length === 0 && shoppingList.products.length === 0;

  return (
    <div
      className={`
        flex
        w-full
        items-center
        justify-between
        gap-2
        px-4
        py-2
      `}
    >
      <div className="w-full">
        {isOpen && (
          <div
            onClick={stopPropagation}
            className={`
              flex-1

              tablet:w-96
              tablet:flex-initial
            `}
          >
            <TextInput
              className="w-full"
              value={name}
              onChange={setName}
            />
          </div>
        )}
        {!isOpen && (
          <div
            className={`
              flex
              gap-8
            `}
          >
            {name}
            <span
              className={`
                hidden

                tablet:inline
              `}
            >
              {shoppingList.ingredients.length === 0
                ? '(Vide)'
                : `(${shoppingList.ingredients.length + shoppingList.products.length} produits)`}
            </span>
          </div>
        )}
      </div>
      <div
        className={`
          hidden
          gap-2

          tablet:flex
        `}
      >
        <EditLinkButton
          icon="shopping"
          to={`/app/shopping-lists/${shoppingList.id}`}
          isDisabled={isEmpty}
          tooltipText={isEmpty ? 'La liste est vide' : ''}
          text="Je fais les courses"
        />
        <DeleteShoppingListButton shoppintListId={shoppingList.id} />
      </div>
    </div>
  );
}
