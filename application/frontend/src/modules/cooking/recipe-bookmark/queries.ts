import { useQuery } from '@tanstack/react-query';
import { listRecipeBookmarks } from '#/modules/cooking/recipe-bookmark/api';

export enum RecipeBookmarksQueryKey {
  List = 'recipe-bookmarks',
}

export function useRecipeBookmarks() {
  const { data } = useQuery({
    queryKey: [RecipeBookmarksQueryKey.List],
    queryFn: listRecipeBookmarks,
    staleTime: 5 * 60 * 1000,
  });

  return data ?? [];
}
