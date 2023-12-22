'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
  const redirectToRecipeList = () => router.back();
  const deleteRecipe = async () => {
    await fetchApi('DELETE', `/api/recipes/${params.recipeId }`);
    redirectToRecipeList();
  };

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{  opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.3,
        }}
      >
        <DeleteModal
          title="Delete this recipe"
          body="Are you sure you want to remove this recipe from your list? There is no turning back."
          onConfirm={deleteRecipe}
          onCancel={redirectToRecipeList}
        />
      </motion.div>
    </AnimatePresence>
  );
}