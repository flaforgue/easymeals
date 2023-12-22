'use client';

import { ReactNode } from 'react';
import { Recipe } from '@lemonpie/shared';
import Sidenav from '@/components/Sidenav';
import fetchApi from '@/utils/fetch-api';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  const createRecipe = () => fetchApi<Recipe[]>('POST', '/api/recipes');

  return (
    <section className="min-w-screen">
      <aside className="fixed top-0 left-0 w-64 h-screen">
        <Sidenav />
      </aside>
      <div className="min-h-screen p-4 sm:ml-64">
        {children}
        <button onClick={createRecipe} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add
          </span>
        </button>
      </div>
    </section>
  );
}