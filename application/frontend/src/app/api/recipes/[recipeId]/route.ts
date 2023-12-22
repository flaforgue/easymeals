import { CacheTag } from '../../cache';
import { NextApiRequest } from 'next';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { revalidateTag } from 'next/cache';

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { recipeId: string } },
) {
  const { accessToken } = await getAccessToken();

  const res = await fetch(`${process.env.BACKEND_BASE_URL}/recipes/${params.recipeId}`, {
    method: 'DELETE',
    headers : {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  revalidateTag(CacheTag.Recipes);

  return res;
}
