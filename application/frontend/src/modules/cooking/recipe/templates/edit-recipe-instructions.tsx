import CreateRecipeInstructionForm from '#/modules/cooking/recipe-instruction/components/create-recipe-instruction-form';
import EditableRecipeInstruction from '#/modules/cooking/recipe-instruction/components/editable-recipe-instruction';
import InsertEmptyRecipeInstructionButton from '#/modules/cooking/recipe-instruction/components/buttons/insert-empty-recipe-instruction-button';
import { useRecipeInstructions } from '#/modules/cooking/recipe-instruction/queries';
import IconDetailedCookbook from '#/components/icons/icon-detailed-cookbook';
import Card from '#/components/cards/card';

interface EdiutRecipeInstructionsProps {
  recipeId: string;
}
export default function EditRecipeInstructions({ recipeId }: EdiutRecipeInstructionsProps) {
  const recipeInstructions = useRecipeInstructions(recipeId);

  return (
    <div
      className={`
        font-base
        w-full
      `}
    >
      {recipeInstructions.length === 0 && (
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

              tablet:w-56
            `}
          >
            <IconDetailedCookbook />
          </div>
          <div>
            <p
              className={`
                mb-4
                text-xl
                font-bold
                text-sky-700
              `}
            >
              Veuillez saisir les instructions de votre recette.
            </p>
            <p className="text-slate-500">
              Évitez de regrouper trop d&apos;actions au sein d&apos;une même instruction afin de pouvoir les cocher
              facilement au fur et à mesure.
            </p>
          </div>
        </Card>
      )}
      {recipeInstructions.map((recipeInstruction) => {
        return (
          <div key={recipeInstruction.id}>
            <InsertEmptyRecipeInstructionButton
              recipeId={recipeId}
              order={recipeInstruction.order}
            />
            <EditableRecipeInstruction recipeInstruction={recipeInstruction} />
          </div>
        );
      })}

      <div className="mt-8">
        <CreateRecipeInstructionForm
          recipeId={recipeId}
          nextInstructionOrder={recipeInstructions.length}
        />
      </div>
    </div>
  );
}
