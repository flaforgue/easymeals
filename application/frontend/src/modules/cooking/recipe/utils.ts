import { Recipe, UpdateRecipeCommand } from '#/shared';

export function hasChanges(recipe: Recipe, updateCommand: Omit<UpdateRecipeCommand, 'id'>) {
  return (
    updateCommand.name !== recipe.name ||
    updateCommand.illustrationUrl !== recipe.illustrationUrl ||
    updateCommand.preparationTimeInMinutes !== recipe.preparationTimeInMinutes ||
    updateCommand.totalTimeInMinutes !== recipe.totalTimeInMinutes ||
    updateCommand.isVegetarian !== recipe.isVegetarian ||
    updateCommand.cuisineTypeId !== recipe.cuisineTypeId
  );
}
