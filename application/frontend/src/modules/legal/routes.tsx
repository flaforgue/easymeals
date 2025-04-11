import Privacy from '#/modules/legal/pages/privacy';
import CGU from '#/modules/legal/pages/cgu';
import { ModuleRoutes } from '#/router';
import Legal from '#/modules/legal/pages/legal';

export const legalRoutes: ModuleRoutes = {
  public: [
    {
      path: 'protection-des-donnees',
      element: <Privacy />,
    },
    {
      path: 'conditions-generales-utilisation',
      element: <CGU />,
    },
    {
      path: 'mentions-legales',
      element: <Legal />,
    },
  ],
  user: [],
};
