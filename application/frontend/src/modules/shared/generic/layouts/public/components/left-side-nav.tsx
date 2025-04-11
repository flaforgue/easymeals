import MainNavLink from '#/components/main-nav-link';
import { Link } from 'react-router-dom';

export default function LeftSideNav() {
  return (
    <div
      className={`
        fixed
        left-0
        top-0
        h-screen
        w-20
        overflow-y-auto
        bg-sky-700
        px-3
        py-4
        font-title

        laptop:w-60
      `}
    >
      <div
        className={`
          mb-8
          mt-2
          flex
          justify-center
        `}
      >
        <Link
          to="/home"
          className={`
            rounded-full
            border
            border-orange-500
            bg-orange-500
            shadow
          `}
        >
          <img
            src="/images/easymeals.png"
            width="100"
            alt="easymeals"
          />
        </Link>
      </div>
      <ul
        className={`
          space-y-1
          font-medium
        `}
      >
        <li className="pb-2">
          <MainNavLink
            to="/home"
            label="Accueil"
            icon="home"
          />
        </li>
        <li>
          <MainNavLink
            to="/recipes"
            label="Recettes"
            icon="book"
          />
        </li>
        <li className="pb-2">
          <MainNavLink
            to="/login"
            label="Connexion"
            icon="user"
          />
        </li>
        <li className="pb-2">
          <MainNavLink
            to="/register"
            label="Inscription"
            icon="register"
          />
        </li>
      </ul>
    </div>
  );
}
