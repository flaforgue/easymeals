import TextareaInput from '#/components/inputs/textarea-input';
import useAutoSavedState from '#/hooks/use-autosaved-state';
import useDebouncedCallback from '#/hooks/use-debounced-callback';
import DeleteRecipeInstructionButton from '#/modules/cooking/recipe-instruction/components/buttons/delete-recipe-instruction-button';
import DurationInput from '#/modules/cooking/recipe-instruction/components/duration-input';
import { useUpdateRecipeInstructionMutation } from '#/modules/cooking/recipe-instruction/mutations';
import { RecipeInstruction, UpdateRecipeInstructionCommand } from '#/shared';

interface EditableRecipeInstructionProps {
  recipeInstruction: RecipeInstruction;
}
export default function EditableRecipeInstruction({ recipeInstruction }: EditableRecipeInstructionProps) {
  const updateMutation = useUpdateRecipeInstructionMutation(recipeInstruction.recipeId);
  const updateRecipeInstruction = (inputs: Omit<UpdateRecipeInstructionCommand, 'id'>) => {
    const hasChanges =
      recipeInstruction.text !== inputs.text || recipeInstruction.timerNbMinutes !== inputs.timerNbMinutes;

    if (!hasChanges) {
      return;
    }

    updateMutation.mutate({
      ...inputs,
      id: recipeInstruction.id,
    });
  };
  const debouncedUpdateRecipeInstruction = useDebouncedCallback(updateRecipeInstruction, 1000);
  const autoSaveRecipeInstruction = () => {
    debouncedUpdateRecipeInstruction({
      text: text,
      timerNbMinutes: timerNbMinutes,
    });
  };
  const [text, setText] = useAutoSavedState(recipeInstruction.text, autoSaveRecipeInstruction);
  const [timerNbMinutes, seTimerNbMinutes] = useAutoSavedState(
    recipeInstruction.timerNbMinutes,
    autoSaveRecipeInstruction,
  );

  return (
    <div
      className={`
        flex
        flex-col-reverse
        gap-4
        rounded
        bg-white
        p-4
        shadow

        tablet:flex-row
        tablet:gap-2
      `}
    >
      <DeleteRecipeInstructionButton recipeInstruction={recipeInstruction} />
      <TextareaInput
        onChange={setText}
        value={text}
        className={`
          w-full
          flex-1
        `}
        rows={3}
      />
      <div>
        <p
          className={`
            mb-1
            text-center
            text-sm
            text-slate-500

            tablet:mb-0
            tablet:text-left
          `}
        >
          Minuteur
        </p>
        <DurationInput
          value={timerNbMinutes}
          onChange={seTimerNbMinutes}
        />
      </div>
    </div>
  );
}
