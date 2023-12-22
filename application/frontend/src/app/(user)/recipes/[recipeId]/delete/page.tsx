'use client';

import DeleteModal from '@/components/DeleteModal';
import fetchApi from '@/utils/fetch-api';
import { useRouter } from 'next/navigation';

interface DeleteProps {
  params: {
    recipeId: string;
  };
}

export default function Delete({ params }: DeleteProps) {
  const router = useRouter();
  const redirectToRecipeList = () => router.push('/recipes', {
    scroll: false,
  });
  const deleteRecipe = async () => {
    await fetchApi('DELETE', `/api/recipes/${params.recipeId }`);
    redirectToRecipeList();
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