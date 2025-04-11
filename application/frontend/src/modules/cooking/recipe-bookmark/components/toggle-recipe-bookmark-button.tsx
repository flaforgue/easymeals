import AnimatedIcon from '#/components/animated-icon';
import {
  useCreateRecipeBookmarkMutation,
  useDeleteRecipeBookmarkMutation,
} from '#/modules/cooking/recipe-bookmark/mutations';
import { useRecipeBookmarks } from '#/modules/cooking/recipe-bookmark/queries';
import { useState } from 'react';

interface ToggleRecipeBookmarkButtonProps {
  recipeId: string;
  onBookmarked?: () => void;
}
export default function ToggleRecipeBookmarkButton({
  recipeId,
  onBookmarked = () => {},
}: ToggleRecipeBookmarkButtonProps) {
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

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  return (
    <button
      onClick={toggleRecipeBookmark}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tooltip-content={isBookmarked ? 'Retirer des favoris' : 'Mettre en favoris'}
      data-tooltip-id="global"
      className={`
        h-full
        w-full
        rounded-full
        border-2
        align-text-bottom

        ${
          isBookmarked
            ? `
              border-green-600
              bg-green-600
              text-white
            `
            : `
              border-white

              hover:border-green-600
            `
        }

        text-green-600

        hover:bg-green-600
        hover:text-white
      `}
    >
      <div
        className={`
          mx-auto
          h-1/2
          w-1/2
        `}
      >
        <AnimatedIcon
          icon={isBookmarked ? 'unbookmark' : 'bookmark'}
          isPlaying={isButtonHovered}
        />
      </div>
    </button>
  );
}
