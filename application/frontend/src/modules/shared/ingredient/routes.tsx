import { ModuleRoutes } from '#/router';
import ListIngredients from './pages/list-ingredients';

export const ingredientsRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'ingredients',
      element: <ListIngredients />,
    },
  ],
};
