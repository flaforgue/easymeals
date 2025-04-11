import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ListPublicRecipesQuery, ListRecipesQuery } from '#/shared';
import { findPublicRecipe, listPublicRecipes, listRecipes } from '#/modules/cooking/recipe/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isNotFoundException } from '#/api/errors/not-found-exception';
import toast from 'react-hot-toast';

export enum RecipesQueryKey {
  List = 'recipes',
  Find = 'recipe',
  PublicList = 'public-recipes',
  PublicFind = 'public-recipe',
}

export function useRecipes(query: ListRecipesQuery) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [RecipesQueryKey.List, query],
    queryFn: () => listRecipes(query),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    for (const recipe of data) {
      queryClient.setQueryData([RecipesQueryKey.Find, recipe.id], recipe);
    }
  }, [queryClient, data]);

  if (data === undefined) {
    return {
      recipes: [],
      isLoading: isLoading,
    };
  }

  return {
    recipes: data,
    isLoading: isLoading,
  };
}

export function usePublicRecipes(query: ListPublicRecipesQuery) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [RecipesQueryKey.PublicList, query],
    queryFn: () => listPublicRecipes(query),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    for (const recipe of data) {
      queryClient.setQueryData([RecipesQueryKey.PublicFind, recipe.id], recipe);
    }
  }, [queryClient, data]);

  if (data === undefined) {
    return {
      recipes: [],
      isLoading: isLoading,
    };
  }

  return {
    recipes: data,
    isLoading: isLoading,
  };
}

export function usePublicRecipe(recipeId: string) {
  const navigate = useNavigate();
  const { data, error } = useQuery({
    queryKey: [RecipesQueryKey.PublicFind, recipeId],
    queryFn: () => findPublicRecipe({ id: recipeId }),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (error === null) {
      return;
    }

    if (isNotFoundException(error)) {
      toast.error(error.message, { id: 'global' });
      navigate('/recipes');
    }
  }, [error, navigate]);

  return data;
}
