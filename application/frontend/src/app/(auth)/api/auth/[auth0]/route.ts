import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE,
      scope: 'openid offline_access',
    },
  }),
}) as NextApiHandler;
