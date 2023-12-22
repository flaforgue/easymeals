import { getAccessToken } from '@auth0/nextjs-auth0';

// export const dynamic = 'force-dynamic';

export async function GET() {
  const { accessToken } = await getAccessToken();

  return fetch(`${process.env.BACKEND_BASE_URL}/recipes`, {
    // cache: 'no-store',
    method: 'GET',
    headers : {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
