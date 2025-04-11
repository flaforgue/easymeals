import CreateRecipe from '#/modules/cooking/recipe/pages/create-recipe';
import EditRecipe from '#/modules/cooking/recipe/pages/edit-recipe';
import ListRecipesPublic from '#/modules/cooking/recipe/pages/list-recipes-public';
import ListRecipes from '#/modules/cooking/recipe/pages/list-recipes';
import ShowRecipePublic from '#/modules/cooking/recipe/pages/show-recipe-public';
import ShowRecipe from '#/modules/cooking/recipe/pages/show-recipe';
import { ModuleRoutes } from '#/router';

export const recipesRoutes: ModuleRoutes = {
  public: [
    {
      path: 'recipes',
      element: <ListRecipesPublic />,
    },
    {
      path: 'recipes/:recipeId',
      element: <ShowRecipePublic />,
    },
  ],
  user: [
    {
      path: 'recipes',
      element: <ListRecipes />,
    },
    {
      path: 'recipes/create',
      element: <CreateRecipe />,
    },
    {
      path: 'recipes/:recipeId',
      element: <ShowRecipe />,
    },
    {
      path: 'recipes/:recipeId/edit',
      element: <EditRecipe />,
    },
  ],
};
