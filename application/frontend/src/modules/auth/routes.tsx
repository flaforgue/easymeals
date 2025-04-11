import Login from '#/modules/auth/pages/login';
import Logout from '#/modules/auth/pages/logout';
import LoginCallback from '#/modules/auth/pages/login-callback';
import { ModuleRoutes } from '#/router';

export const authRoutes: ModuleRoutes = {
  public: [
    {
      path: 'register',
      element: <Login />,
    },
    {
      path: 'login',
      element: <Login />,
    },
  ],
  user: [
    {
      path: 'login-callback',
      element: <LoginCallback />,
    },
    {
      path: 'logout',
      element: <Logout />,
    },
  ],
};
