import ErrorRenderer from '#/modules/errors/pages/error-renderer';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { legalRoutes } from '#/modules/legal/routes';
import { authRoutes } from '#/modules/auth/routes';
import { recipesRoutes } from '#/modules/cooking/recipe/routes';
import { homeRoutes } from '#/modules/home/routes';
import { mealsRoutes } from '#/modules/planning/meal/routes';
import { ingredientsRoutes } from '#/modules/shared/ingredient/routes';
import { productsRoutes } from '#/modules/shopping/product/routes';
import { shoppingListsRoutes } from '#/modules/shopping/shopping-list/routes';
import { houseRoutes } from '#/modules/user/house/routes';
import { settingsRoutes } from '#/modules/user/settings/routes';
import PublicLayout from '#/modules/shared/generic/layouts/public/public-layout';
import UserLayout from '#/modules/shared/generic/layouts/user/user-layout';

type RouteType = 'public' | 'user';
export type ModuleRoutes = Record<RouteType, RouteObject[]>;

const modulesRoutes: ModuleRoutes[] = [
  authRoutes,
  recipesRoutes,
  homeRoutes,
  legalRoutes,
  mealsRoutes,
  ingredientsRoutes,
  productsRoutes,
  shoppingListsRoutes,
  houseRoutes,
  settingsRoutes,
];

const publicRoutes = modulesRoutes.flatMap((moduleRoutes) => moduleRoutes.public);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <ErrorRenderer />,
    children: publicRoutes,
  },
  {
    path: '/app',
    element: <UserLayout />,
    errorElement: <ErrorRenderer />,
    children: [...modulesRoutes.flatMap((moduleRoutes) => moduleRoutes.user), ...publicRoutes],
  },
]);
