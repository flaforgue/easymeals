import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { FindShoppingListQuery, NB_SHOPPLING_LISTS_PER_PAGE } from '#/shared';
import { findShoppingList, listShoppingLists } from '#/modules/shopping/shopping-list/api';

export enum ShoppingListsQueryKey {
  List = 'shopping-lists',
  Find = 'shopping-list',
}

export function useShoppingLists() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: [ShoppingListsQueryKey.List],
    queryFn: ({ pageParam }) =>
      listShoppingLists({
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return null;
      }

      return lastPageParam + 1;
    },
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const shoppingLists = (data?.pages ?? []).flat();

  return {
    shoppingLists: shoppingLists,
    hasNextPage: hasNextPage && shoppingLists.length >= NB_SHOPPLING_LISTS_PER_PAGE,
    fetchNextPage: fetchNextPage,
    isFetching: isFetching,
  };
}

export function useLatestShoppingListId() {
  const query = {
    page: 1,
  };
  const { data } = useQuery({
    queryKey: [ShoppingListsQueryKey.List, query],
    queryFn: () => listShoppingLists(query),
    select: (data) => {
      return data[0]?.id;
    },
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  return data;
}

export function useShortPolledShoppingList(query: FindShoppingListQuery) {
  const { data } = useQuery({
    queryKey: [ShoppingListsQueryKey.Find, query.id],
    queryFn: () => findShoppingList({ id: query.id }),
    staleTime: 0,
    refetchInterval: 5 * 1000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  return data;
}
