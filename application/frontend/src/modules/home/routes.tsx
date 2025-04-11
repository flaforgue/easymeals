import Home from '#/modules/home/pages/home';
import { ModuleRoutes } from '#/router';

export const homeRoutes: ModuleRoutes = {
  public: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'home',
      element: <Home />,
    },
  ],
  user: [],
};
