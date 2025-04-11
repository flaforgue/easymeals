import MainNavLink from '#/components/main-nav-link';
import UserNavDropdown from '#/modules/shared/generic/layouts/user/components/user-nav-dropdown';
import { Link } from 'react-router-dom';

export default function LeftSideNav() {
  return (
    <div
      className={`
        fixed
        left-0
        top-0
        flex
        h-screen
        w-20
        flex-col
        justify-between
        overflow-y-auto
        bg-sky-700
        px-3
        py-4
        font-title

        laptop:w-60

        print:hidden
      `}
    >
      <div
        className={`
          mb-2

          laptop:mb-4
        `}
      >
        <div
          className={`
            mb-2
            mt-2
            flex
            justify-center

            laptop:mb-8
          `}
        >
          <Link
            to="/app/home"
            className={`
              rounded-full
              border
              border-orange-500
              bg-orange-500
              shadow
              shadow-slate-700
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
            space-y-6
            font-medium

            tablet:space-y-1

            laptop:space-y-1
          `}
        >
          <li
            className={`
              hidden
              pb-2

              laptop:block
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-3
                uppercase
                text-white
              `}
            >
              <div
                className={`
                  w-5
                  rounded
                  border-t
                  border-white
                `}
              />
              Planning
              <div
                className={`
                  flex-1
                  rounded
                  border-t
                  border-white
                `}
              />
            </div>
          </li>
          <li>
            <MainNavLink
              to="/app/meals"
              label="Mon menu"
              icon="calendar"
            />
          </li>
          <li>
            <MainNavLink
              to="/app/shopping-lists"
              label="Mes courses"
              icon="shopping"
            />
          </li>
          <li
            className={`
              hidden
              pb-2
              pt-8

              laptop:block
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-3
                uppercase
                text-white
              `}
            >
              <div
                className={`
                  w-5
                  rounded
                  border-t
                  border-white
                `}
              />
              Mon espace
              <div
                className={`
                  flex-1
                  rounded
                  border-t
                  border-white
                `}
              />
            </div>
          </li>
          <li>
            <MainNavLink
              to="/app/recipes"
              label="Livre de recettes"
              icon="book"
            />
          </li>
          <li>
            <MainNavLink
              to="/app/ingredients"
              label="Mes ingrédients"
              icon="category"
            />
          </li>
          <li>
            <MainNavLink
              to="/app/products"
              label="Mes produits"
              icon="bag"
            />
          </li>
        </ul>
      </div>
      <UserNavDropdown />
    </div>
  );
}
