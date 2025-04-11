import QuantifiedIngredientForm from '#/modules/shared/ingredient/components/forms/quantified-ingredient-form';
import { useCreateRecipeIngredientMutation } from '#/modules/cooking/recipe-ingredient/mutations';

interface CreateRecipeIngredientFormProps {
  recipeId: string;
}

export default function CreateRecipeIngredientForm({ recipeId }: CreateRecipeIngredientFormProps) {
  const mutation = useCreateRecipeIngredientMutation();
  const createRecipeIngredient = (ingredientId: string, quantity: number) => {
    const inputs = {
      recipeId: recipeId,
      ingredientId: ingredientId,
      quantity: quantity,
    };

    mutation.mutate(inputs);
  };

  return <QuantifiedIngredientForm onSubmit={createRecipeIngredient} />;
}
