import { Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import Footer from '#/components/footer';
import LeftSideNav from '#/modules/shared/generic/layouts/public/components/left-side-nav';
import MobileBottomNav from '#/modules/shared/generic/layouts/public/components/mobile-bottom-nav';

export default function PublicLayout() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/app${location.pathname}`);
    }
  }, [isAuthenticated, location.pathname, navigate]);

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
}
