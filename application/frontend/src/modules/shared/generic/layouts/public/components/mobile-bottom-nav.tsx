import IconBook from '#/components/icons/icon-book';
import IconHome from '#/components/icons/icon-home';
import IconUser from '#/components/icons/icon-user';
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
        justify-center
        gap-8
        rounded-t
        bg-sky-700
        text-white

        print:hidden
      `}
    >
      <Link
        to="/home"
        className={`
          flex
          items-center
          rounded-full
          p-2
          transition-all

          ${
            currentPathname.indexOf('/home') !== -1
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
        to="/recipes"
        className={`
          flex
          items-center
          rounded-full
          p-2
          transition-all

          ${
            currentPathname.indexOf('/recipes') !== -1
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
        to="/login"
        className={`
          flex
          h-full
          items-center
        `}
      >
        <div className="h-8">
          <IconUser />
        </div>
      </Link>
    </div>
  );
}
