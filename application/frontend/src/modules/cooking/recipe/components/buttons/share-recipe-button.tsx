import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';
import { Recipe } from '#/shared';
import { logError } from '#/utils/error';
import { isMobile } from '#/utils/mobile';
import toast from 'react-hot-toast';

interface ShareRecipeButtonProps {
  recipe: Recipe;
}
export default function ShareRecipeButton({ recipe }: ShareRecipeButtonProps) {
  const shareRecipe = () => {
    const recipeUrl = `${window.location.origin}/recipes/${recipe.id}`;

    if (!isMobile() || navigator.share === undefined) {
      navigator.clipboard
        .writeText(recipeUrl)
        .then(() => toast.success('Lien de partage copié', { id: 'global' }))
        .catch(logError);

      return;
    }

    navigator
      .share({
        title: recipe.name,
        text: `Je t'invite à découvrir cette super recette ${recipe.isVegetarian ? 'végé ' : ''}!`,
        url: recipeUrl,
      })
      .then(() => toast.success("Merci d'avoir partagé cette recette"))
      .catch(logError);
  };

  return (
    <EditIconButton
      icon="share"
      size="large"
      onClick={shareRecipe}
      tooltipText="Partager"
    />
  );
}
