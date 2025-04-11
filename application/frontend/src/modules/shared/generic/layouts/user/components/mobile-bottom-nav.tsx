import IconBook from '#/components/icons/icon-book';
import IconCalendar from '#/components/icons/icon-calendar';
import IconHome from '#/components/icons/icon-home';
import IconShopping from '#/components/icons/icon-shopping';
import UserNavDropdown from '#/modules/shared/generic/layouts/user/components/user-nav-dropdown';
import { Link, useLocation } from 'react-router-dom';

export default function MobileBottomSideNav() {
  const currentPathname = useLocation().pathname;

  return (
    <div
      className={`
        fixed
        bottom-0
        left-0
        z-50
        flex
        h-16
        w-screen
        items-center
        justify-between
        rounded-t
        bg-sky-700
        px-8
        text-white

        print:hidden
      `}
    >
      <div
        className={`
          flex
          items-center
          gap-4
        `}
      >
        <UserNavDropdown />
      </div>
      <div
        className={`
          flex
          items-center
          justify-center
          gap-2
        `}
      >
        <Link
          to="/app/home"
          className={`
            flex
            items-center
            rounded-full
            p-2
            transition-all

            ${
              currentPathname.indexOf('/app/home') !== -1
                ? `
                  bg-white
                  text-sky-700
                `
                : ''
            }
          `}
        >
          <div className="h-6">
            <IconHome />
          </div>
        </Link>
        <Link
          to="/app/recipes"
          className={`
            flex
            items-center
            rounded-full
            p-2
            transition-all

            ${
              currentPathname.indexOf('/app/recipes') !== -1
                ? `
                  bg-white
                  text-sky-700
                `
                : ''
            }
          `}
        >
          <div className="h-6">
            <IconBook />
          </div>
        </Link>
        <Link
          to="/app/meals"
          className={`
            flex
            items-center
            rounded-full
            p-2
            transition-all

            ${
              currentPathname.indexOf('/app/meals') !== -1
                ? `
                  bg-white
                  text-sky-700
                `
                : ''
            }
          `}
        >
          <div className="h-6">
            <IconCalendar />
          </div>
        </Link>
        <Link
          to="/app/shopping-lists"
          className={`
            flex
            items-center
            rounded-full
            p-2
            transition-all

            ${
              currentPathname.indexOf('/app/shopping-lists') !== -1
                ? `
                  bg-white
                  text-sky-700
                `
                : ''
            }
          `}
        >
          <div className="h-6">
            <IconShopping />
          </div>
        </Link>
      </div>
    </div>
  );
}
