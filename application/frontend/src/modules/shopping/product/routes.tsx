import { ModuleRoutes } from '#/router';
import ListProducts from './pages/list-products';

export const productsRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'products',
      element: <ListProducts />,
    },
  ],
};
