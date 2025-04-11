import RoundedAddLinkButton from '#/components/buttons/rounded-buttons/rounded-add-link-button';

export default function CreateRecipeButton() {
  return (
    <RoundedAddLinkButton
      to="/app/recipes/create"
      tooltipText="Ajouter une recette"
    />
  );
}
