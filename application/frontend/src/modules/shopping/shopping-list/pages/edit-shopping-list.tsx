import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import EditableShoppingList from '#/modules/shopping/shopping-list/templates/editable-shopping-list';
import { useShortPolledShoppingList } from '#/modules/shopping/shopping-list/queries';
import { useParams } from 'react-router-dom';

export default function EditShoppingList() {
  const shoppingListId = useParams().shoppingListId!;
  const shoppingList = useShortPolledShoppingList({ id: shoppingListId });

  if (shoppingList === undefined) {
    return <MainContentLoadingOverlay />;
  }

  return (
    <div>
      <EditableShoppingList shoppingList={shoppingList} />
    </div>
  );
}
