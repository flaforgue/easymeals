import { CacheTag } from '../cache';
import { getAccessToken } from '@auth0/nextjs-auth0';

export async function GET() {
  const { accessToken } = await getAccessToken();

  return fetch(`${process.env.BACKEND_BASE_URL}/recipes`, {
    method: 'GET',
    headers : {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: [CacheTag.Recipes],
    },
  });
}
