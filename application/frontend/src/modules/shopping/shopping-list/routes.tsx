import EditShoppingList from '#/modules/shopping/shopping-list/pages/edit-shopping-list';
import ListShoppingLists from '#/modules/shopping/shopping-list/pages/list-shopping-lists';
import ShowShoppingList from '#/modules/shopping/shopping-list/pages/show-shopping-list';
import { ModuleRoutes } from '#/router';

export const shoppingListsRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'shopping-lists',
      element: <ListShoppingLists />,
    },
    {
      path: 'shopping-lists/:shoppingListId/edit',
      element: <EditShoppingList />,
    },
    {
      path: 'shopping-lists/:shoppingListId',
      element: <ShowShoppingList />,
    },
  ],
};
