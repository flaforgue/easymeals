import { NextApiRequest } from 'next';
import { getAccessToken } from '@auth0/nextjs-auth0';

// export const dynamic = 'force-dynamic';

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { recipeId: string } },
) {
  const { accessToken } = await getAccessToken();

  return fetch(`${process.env.BACKEND_BASE_URL}/recipes/${params.recipeId}`, {
    // cache: 'no-store',
    method: 'DELETE',
    headers : {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
