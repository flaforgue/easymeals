import JoinHouse from '#/modules/user/house/pages/join-house';
import { ModuleRoutes } from '#/router';

export const houseRoutes: ModuleRoutes = {
  public: [],
  user: [
    {
      path: 'join/:houseJoinKey',
      element: <JoinHouse />,
    },
  ],
};
