import useAutoSavedState from '#/hooks/use-autosaved-state';
import useDebouncedCallback from '#/hooks/use-debounced-callback';
import RecipeForm from '#/modules/cooking/recipe/templates/recipe-form';
import { useUpdateRecipeMutation } from '#/modules/cooking/recipe/mutations';
import { hasChanges } from '#/modules/cooking/recipe/utils';
import { Recipe, UpdateRecipeCommand } from '#/shared';

interface EditRecipeInfosProps {
  recipe: Recipe;
}
export default function EditRecipeInfos({ recipe }: EditRecipeInfosProps) {
  const mutation = useUpdateRecipeMutation();
  const updateRecipe = (inputs: Omit<UpdateRecipeCommand, 'id'>) => {
    if (!hasChanges(recipe, inputs)) {
      return;
    }

    mutation.mutate({
      ...inputs,
      id: recipe.id,
    });
  };
  const debouncedUpdateRecipe = useDebouncedCallback(updateRecipe, 1000);
  const autoSaveRecipe = () => {
    debouncedUpdateRecipe({
      name: name,
      totalTimeInMinutes: totalTimeInMinutes,
      isVegetarian: isVegetarian,
      cuisineTypeId: cuisineTypeId,
      illustrationUrl: illustrationUrl,
      preparationTimeInMinutes: preparationTimeInMinutes,
    });
  };

  const [name, setName] = useAutoSavedState(recipe.name, autoSaveRecipe);
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useAutoSavedState(recipe.totalTimeInMinutes, autoSaveRecipe);
  const [isVegetarian, setIsVegetarian] = useAutoSavedState(recipe.isVegetarian, autoSaveRecipe);
  const [cuisineTypeId, setCuisineTypeId] = useAutoSavedState(recipe.cuisineTypeId, autoSaveRecipe);
  const [illustrationUrl, setIllustrationUrl] = useAutoSavedState<string | null>(
    recipe.illustrationUrl,
    autoSaveRecipe,
  );
  const [preparationTimeInMinutes, setPreparationTimeInMinutes] = useAutoSavedState(
    recipe.preparationTimeInMinutes,
    autoSaveRecipe,
  );

  return (
    <RecipeForm
      name={name}
      illustrationUrl={illustrationUrl}
      preparationTimeInMinutes={preparationTimeInMinutes}
      totalTimeInMinutes={totalTimeInMinutes}
      isVegetarian={isVegetarian}
      cuisineTypeId={cuisineTypeId}
      setName={setName}
      setIllustrationUrl={setIllustrationUrl}
      setPreparationTimeInMinutes={setPreparationTimeInMinutes}
      setTotalTimeInMinutes={setTotalTimeInMinutes}
      setIsVegetarian={setIsVegetarian}
      setCuisineTypeId={setCuisineTypeId}
    />
  );
}
