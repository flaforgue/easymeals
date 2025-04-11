import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useUpdateProfileMutation } from '#/modules/user/profile/mutations';
import { useEffect } from 'react';
import { useProfile } from '#/modules/user/profile/queries';
import Footer from '#/components/footer';
import LeftSideNav from '#/modules/shared/generic/layouts/user/components/left-side-nav';
import MobileBottomNav from '#/modules/shared/generic/layouts/user/components/mobile-bottom-nav';

const UserLayout = withAuthenticationRequired(
  () => {
    const { user } = useAuth0();
    const userProfile = useProfile();
    const updateUserMutation = useUpdateProfileMutation();

    const updateUserNameFromTokenIfNotSet = () => {
      if (updateUserMutation.isPending || userProfile === undefined || user === undefined) {
        return;
      }

      if (userProfile.name === null || userProfile.name === '') {
        updateUserMutation.mutate({
          name: user.name ?? `${user.given_name} ${user.family_name}` ?? user.nickname ?? user.email ?? 'Utilisateur',
        });
      }
    };
    useEffect(updateUserNameFromTokenIfNotSet, [user, userProfile, updateUserMutation]);

    return (
      <section className="min-w-screen">
        <ScrollRestoration />

        <aside
          className={`
            hidden

            tablet:block
          `}
        >
          <LeftSideNav />
        </aside>
        <aside
          className={`
            block

            tablet:hidden
          `}
        >
          <MobileBottomNav />
        </aside>

        <div
          className={`
            ml-0
            min-h-screen
            p-4

            screen:tablet:ml-20
            screen:laptop:ml-60
          `}
        >
          <Outlet />
        </div>

        <Footer />
      </section>
    );
  },
  {
    returnTo: window.location.href,
  },
);

export default UserLayout;
