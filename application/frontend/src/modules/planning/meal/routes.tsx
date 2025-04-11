import ListMeals from '#/modules/planning/meal/pages/list-meals';
import { ModuleRoutes } from '#/router';

export const mealsRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'meals',
      element: <ListMeals />,
    },
  ],
};
