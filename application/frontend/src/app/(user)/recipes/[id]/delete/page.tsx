'use client';

import DeleteModal from '@/components/DeleteModal';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Delete() {
  const router = useRouter();
  const { user } = useUser();
  console.log('user', user);

  const deleteRecipe = async () => {
    const { accessToken } = await getAccessToken();
    const res = await fetch('http://backend:3000/recipes', {
      method: 'DELETE',
      headers : {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch in ${deleteRecipe.name} (received ${res.status} ${res.statusText})`,
      );
    }

    router.push('/recipes');
  };
  const redirectToRecipeList = () => {
    router.push('/recipes');
  };

  return (
    <DeleteModal
      title="Delete this recipe"
      body="Are you sure you want to remove this recipe from your list? There is no turning back."
      onConfirm={deleteRecipe}
      onCancel={redirectToRecipeList}
    />
  );
}