import DeviceCameraPictureInput from '#/components/inputs/device-camera-picture-input';
import { useUpdateRecipeMutation } from '#/modules/cooking/recipe/mutations';
import { Recipe } from '#/shared';

interface TakePictureFormProps {
  recipe: Recipe;
  className?: string;
}
export default function TakePictureForm({ recipe, className = '' }: TakePictureFormProps) {
  const updateRecipeMutation = useUpdateRecipeMutation();
  const updateRecipeIllustration = (newIllustrationUrl: string) => {
    updateRecipeMutation.mutate({
      id: recipe.id,
      name: recipe.name,
      illustrationUrl: newIllustrationUrl,
      preparationTimeInMinutes: recipe.preparationTimeInMinutes,
      totalTimeInMinutes: recipe.totalTimeInMinutes,
      isVegetarian: recipe.isVegetarian,
      cuisineTypeId: recipe.cuisineTypeId,
    });
  };

  return (
    <div className={className}>
      <DeviceCameraPictureInput
        className="w-full"
        onChange={updateRecipeIllustration}
      />
    </div>
  );
}
