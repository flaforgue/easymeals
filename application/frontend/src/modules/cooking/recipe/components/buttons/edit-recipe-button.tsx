import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';

interface EditRecipeButtonProps {
  recipeId: string;
}

export default function EditRecipeButton({ recipeId }: EditRecipeButtonProps) {
  return (
    <EditIconButton
      to={`/app/recipes/${recipeId}/edit`}
      icon="edit"
      tooltipText="Modifier"
      size="large"
    />
  );
}
