import CreateIconButton from '#/components/buttons/icon-buttons/create-icon-button';
import {
  useCreateRecipeBookmarkMutation,
  useDeleteRecipeBookmarkMutation,
} from '#/modules/cooking/recipe-bookmark/mutations';
import { useRecipeBookmarks } from '#/modules/cooking/recipe-bookmark/queries';

interface ToggleRecipeBookmarkIconButtonProps {
  recipeId: string;
  onBookmarked?: () => void;
}
export default function ToggleRecipeBookmarkIconButton({
  recipeId,
  onBookmarked = () => {},
}: ToggleRecipeBookmarkIconButtonProps) {
  const recipeBookmarks = useRecipeBookmarks();
  const isBookmarked = recipeBookmarks.find((bookmark) => bookmark.recipeId === recipeId);

  const createRecipeBookmarkMutation = useCreateRecipeBookmarkMutation();
  const deleteRecipeBookmarkMutation = useDeleteRecipeBookmarkMutation();
  const toggleRecipeBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isBookmarked) {
      deleteRecipeBookmarkMutation.mutate({ id: recipeId });
    } else {
      createRecipeBookmarkMutation.mutate(
        { id: recipeId },
        {
          onSuccess: onBookmarked,
        },
      );
    }
  };

  return (
    <CreateIconButton
      onClick={toggleRecipeBookmark}
      tooltipText={isBookmarked ? 'Retirer des favoris' : 'Mettre en favoris'}
      icon={isBookmarked ? 'unbookmark' : 'bookmark'}
    />
  );
}
