import Dropdown from '#/components/dropdown/dropdown';
import { DropdownOption } from '#/components/dropdown/dropdown';
import MainNavLink from '#/components/main-nav-link';
import UserAvatar from '#/components/user-avatar';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function UserNavDropdown() {
  const currentPathname = useLocation().pathname;
  const { user } = useAuth0();
  const [isUserAvatarDropdownOpen, setIsUserAvatarDropdownOpen] = useState(false);
  const toggleUserAvatarDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsUserAvatarDropdownOpen(!isUserAvatarDropdownOpen);
  };
  const closeUserAvatarDropdown = () => setIsUserAvatarDropdownOpen(false);
  const userAvatarDropdownOptions: DropdownOption[] = [
    {
      to: '/app/settings',
      isActive: currentPathname.indexOf('/app/settings') !== -1,
      children: (
        <>
          <img
            className="mr-2"
            height="18"
            width="18"
            src="/icons/cog.png"
          />
          Paramètres
        </>
      ),
    },

    {
      to: '/app/logout',
      isActive: currentPathname.indexOf('/app/logout') !== -1,
      children: (
        <>
          <img
            className="mr-2"
            height="18"
            width="18"
            src="/icons/logout.png"
          />
          Déconnexion
        </>
      ),
    },
    {
      onClick: closeUserAvatarDropdown,
      children: (
        <>
          <img
            className="mr-2"
            height="18"
            width="18"
            src="/icons/close.png"
          />
          Fermer
        </>
      ),
    },
  ];

  return (
    <div>
      <div
        className={`
          hidden

          tablet:block

          laptop:hidden
        `}
      >
        <MainNavLink
          to="/app/settings"
          label=""
          icon="user"
        />
      </div>
      <div
        className={`
          block

          tablet:hidden

          laptop:block
        `}
      >
        <div
          className={`
            mx-auto
            w-10

            laptop:w-12
          `}
        >
          <UserAvatar
            pictureUrl={user?.picture}
            onClick={toggleUserAvatarDropdown}
          />
        </div>
        {isUserAvatarDropdownOpen && (
          <div
            className={`
              fixed
              bottom-14
              left-8
              h-32
              w-40

              laptop:relative
              laptop:-top-48
              laptop:left-8
              laptop:h-auto
            `}
          >
            <Dropdown
              isVisible={true}
              options={userAvatarDropdownOptions}
              closeHandler={closeUserAvatarDropdown}
            />
          </div>
        )}
      </div>
    </div>
  );
}
