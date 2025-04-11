import RoundedCreateActionButton from '#/components/buttons/rounded-buttons/rounded-create-action-button';
import { useCreateRecipeInstructionMutation } from '#/modules/cooking/recipe-instruction/mutations';
import { uuidv4 } from '#/shared';

interface InsertEmptyRecipeInstructionButtonProps {
  recipeId: string;
  order: number;
}
export default function InsertEmptyRecipeInstructionButton({
  recipeId,
  order,
}: InsertEmptyRecipeInstructionButtonProps) {
  const createRecipeInstructionMutation = useCreateRecipeInstructionMutation();
  const createRecipeInstruction = (order: number) => {
    const id = uuidv4();
    createRecipeInstructionMutation.mutate({
      id: id,
      recipeId: recipeId,
      text: '',
      timerNbMinutes: 0,
      order: order,
    });
  };

  return (
    <div
      onClick={() => createRecipeInstruction(order)}
      className={`
        mb-6
        mt-6
        flex
        h-0
        cursor-pointer
        items-center
        justify-center
        rounded
        border
        border-dashed
        border-l-green-400
        border-r-green-400
        border-t-green-400
        transition-all

        hover:mb-4
        hover:mt-4
        hover:border-b
        hover:border-green-500
        hover:py-2
      `}
    >
      <RoundedCreateActionButton
        onClick={() => {}}
        icon="plus"
        size="small"
        tooltipText="Ajouter une instruction"
      />
    </div>
  );
}
