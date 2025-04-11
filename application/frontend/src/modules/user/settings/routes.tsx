import EditSettings from '#/modules/user/settings/pages/edit-settings';
import { ModuleRoutes } from '#/router';

export const settingsRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'settings',
      element: <EditSettings />,
    },
  ],
};
