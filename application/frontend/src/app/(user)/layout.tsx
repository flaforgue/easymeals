import { ReactNode } from 'react';
import Sidenav from '@/components/Sidenav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <section className="min-w-screen">
      <aside className="fixed top-0 left-0 w-64 h-screen">
        <Sidenav />
      </aside>
      <div className="min-h-screen p-4 sm:ml-64">
        {children}
      </div>
    </section>
  );
}