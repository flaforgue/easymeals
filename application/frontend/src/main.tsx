import '#/index.css';
import App from '#/App';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { createRoot } from 'react-dom/client';

const authDomain = import.meta.env.VITE_AUTH0_DOMAIN as string;
const authClientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;
const authAudience = import.meta.env.VITE_AUTH0_API_AUDIENCE as string;
const loginCallbackUrl = `${window.location.origin}/app/login-callback`;

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      onRedirectCallback={(appState) => {
        window.location.replace(appState?.returnTo ?? window.location.pathname);
      }}
      authorizationParams={{
        redirect_uri: loginCallbackUrl,
        audience: authAudience,
        scope: 'profile email offline_access',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);
