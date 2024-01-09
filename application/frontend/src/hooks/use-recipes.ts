'use client';

import { Recipe } from '@lemonpie/shared';
import fetchApi from '@/utils/fetch-api';
import { useState } from 'react';

export default function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const fetchRecipes = async () => {
    setRecipes(await fetchApi<Recipe[]>('GET', '/api/recipes'));
  };
  const deleteRecipe = async (recipeId: string) => {
    console.log(recipeId);
    await fetchApi('DELETE', `/api/recipes/${recipeId}`);
    setRecipes(recipes.filter((r) => {
      console.log(r.id, recipeId, r.id !== recipeId);

      return r.id !== recipeId;
    }));
  };

  return {
    recipes,
    fetchRecipes,
    deleteRecipe,
  };
}