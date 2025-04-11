import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';

interface EditShoppingListButtonProps {
  shoppingListId: string;
}

export default function EditShoppingListButton({ shoppingListId }: EditShoppingListButtonProps) {
  return (
    <EditIconButton
      to={`/app/shopping-lists/${shoppingListId}/edit`}
      className="bg-white"
    />
  );
}
