'use client';

import { AnimatePresence, motion } from 'framer-motion';
import DeleteModal from '@/components/DeleteModal';
import { useRouter } from 'next/navigation';
import useRecipes from '@/hooks/use-recipes';

interface DeleteProps {
  params: {
    recipeId: string;
  };
}

export default function Delete({ params }: DeleteProps) {
  const router = useRouter();
  const { deleteRecipe } = useRecipes();
  const redirectToRecipeList = () => router.back();
  const handleDeleteRecipe = async () => {
    await deleteRecipe(params.recipeId);
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
          onConfirm={handleDeleteRecipe}
          onCancel={redirectToRecipeList}
        />
      </motion.div>
    </AnimatePresence>
  );
}