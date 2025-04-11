import WarningBanner from '#/components/banners/warning-banner';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import Card from '#/components/cards/card';
import IconIngredients from '#/components/icons/icon-ingredients';
import NumberInput from '#/components/inputs/number-input';
import { useUpdateNbPortionsMutation } from '#/modules/cooking/recipe/mutations';
import { Recipe } from '#/shared';
import { useState } from 'react';

interface RecipeNbPortionsFormProps {
  recipe: Recipe;
  onSubmitted: () => void;
  hasIngredients: boolean;
}

export default function RecipeNbPortionsForm({ recipe, onSubmitted, hasIngredients }: RecipeNbPortionsFormProps) {
  const [nbPortions, setNbPortions] = useState(recipe.nbPortions);
  const updateNbPortionsMutation = useUpdateNbPortionsMutation();
  const updateNbPortions = () => {
    updateNbPortionsMutation.mutate(
      {
        id: recipe.id,
        nbPortions: nbPortions,
      },
      {
        onSuccess: onSubmitted,
      },
    );
  };

  return (
    <Card
      className={`
        items-center
        justify-between
        gap-8
        bg-white
        p-4

        tablet:flex
      `}
    >
      <div
        className={`
          mx-auto
          mb-4
          w-32
          text-green-500

          tablet:mb-0
          tablet:w-56
        `}
      >
        <IconIngredients />
      </div>
      <div>
        <p
          className={`
            text-xl
            font-bold
            text-sky-500
          `}
        >
          Veuillez confirmer le nombre de portions de votre recette.
        </p>
        <p
          className={`
            my-4
            text-slate-500
          `}
        >
          Cette information permettra d&apos;adapter correctement les quantités au nombre de parts de chaque repas.
        </p>
        {hasIngredients && (
          <WarningBanner className="mb-4">
            Pensez à changer les quantités des ingrédients existants si elles ne sont pas adaptées au nouveau nombre de
            portions.
          </WarningBanner>
        )}
        <div
          className={`
            flex
            flex-wrap
            items-center
            gap-4
            rounded
            text-lg
            text-sky-500
          `}
        >
          <div>Ingrédients pour</div>
          <NumberInput
            value={nbPortions}
            onChange={setNbPortions}
            min={1}
            max={20}
            size="small"
          />
          {nbPortions > 1 ? 'personnes' : 'personne'}
          <SubmitButton onClick={updateNbPortions}>Confirmer</SubmitButton>
        </div>
      </div>
    </Card>
  );
}
