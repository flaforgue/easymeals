import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';
import { isNotFoundException } from '#/api/errors/not-found-exception';
import { defaultErrorHandler } from '#/utils/error';
import { setAccessTokenGetter } from '#/api/access-token-provider';
import { useAuth0 } from '@auth0/auth0-react';
import { useKeyupHandler } from '#/hooks/use-keyup-handler';
import { router } from '#/router';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: defaultErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: defaultErrorHandler,
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (isNotFoundException(error)) {
          return false;
        }

        return failureCount < 3;
      },
    },
  },
});

export default function App() {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  setAccessTokenGetter((() => getAccessTokenSilently().catch(loginWithRedirect)) as () => Promise<string>);

  useKeyupHandler('Escape', () => toast.dismiss('global'));

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Tooltip
        id="global"
        place="top"
        className={`
          hidden

          laptop:block

          print:hidden
        `}
      />
      <Toaster
        position="bottom-center"
        containerClassName="print:hidden mb-14 tablet:mb-0"
        toastOptions={{
          duration: 3000,
          error: {
            style: {
              border: '1px solid #fca5a5',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
          success: {
            style: {
              border: '1px solid #86efac',
            },
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}
