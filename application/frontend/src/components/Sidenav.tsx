'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Route {
  name: string;
  pathname: string;
}

export default function Sidenav() {
  const currentPathname = usePathname();
  const routes: Route[] = [
    {
      name: 'Home',
      pathname: '/home',
    },
    {
      name: 'My recipes',
      pathname: '/recipes',
    },
    {
      name: 'On the menu',
      pathname: '/menus',
    },
    {
      name: 'Settings',
      pathname: '/me',
    },
  ];

  const links = routes.map(
    (route: Route) => (
      <li key={route.pathname}>
        <Link
          href={route.pathname}
          className={`
            flex items-center p-2 text-gray-900 rounded-lg
            ${route.pathname === currentPathname ? 'bg-slate-200' : 'hover:bg-slate-100'}
          `}
        >
          <span className="ms-3">{route.name}</span>
        </Link>
      </li>
    ),
  );

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-slate-50">
      <ul className="space-y-2 font-medium">
        {links}
        <li>
          <a
            className="hover:bg-slate-100 flex items-center p-2 text-gray-900 rounded-lg"
            href="/api/auth/logout"
          >
            <span className="ms-3">Logout</span>
          </a>
        </li>
      </ul>

    </div>
  );
}
