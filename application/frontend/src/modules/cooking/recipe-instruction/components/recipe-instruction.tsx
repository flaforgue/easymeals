import IconCheck from '#/components/icons/icon-check';
import BooleanInput from '#/components/inputs/boolean-input';
import LinedTitle from '#/components/lined-title';
import Timer from '#/components/timer';
import { RecipeInstruction as Instruction } from '#/shared';

interface RecipeInstructionProps {
  recipeInstruction: Instruction;
  index: number;
  isDone: boolean;
  onInstructionChecked: (instructionId: string, isDone: boolean) => void;
}
export default function RecipeInstruction({
  recipeInstruction,
  index,
  isDone,
  onInstructionChecked,
}: RecipeInstructionProps) {
  const handleOnChange = (newIsDone: boolean) => {
    onInstructionChecked(recipeInstruction.id, newIsDone);
  };

  return (
    <div
      className={`
        whitespace-pre-line
        py-4
      `}
    >
      <LinedTitle
        borderclassName={`
          ${isDone ? 'border-green-500' : 'border-slate-300'}
          border-b-0
        `}
      >
        <div
          className={`
            ${isDone ? 'text-green-500' : 'text-slate-400'}

            flex
            gap-2
            font-title
            text-3xl
          `}
        >
          {isDone && (
            <div
              className={`
                h-8
                w-8
              `}
            >
              <IconCheck />
            </div>
          )}
          {`Étape ${index}`}
        </div>
      </LinedTitle>
      <div
        className={`
          mt-4
          flex
          flex-col
          items-center
          justify-between
          gap-4

          tablet:flex-row

          laptop:mt-8
        `}
      >
        <p
          className={`
            mb-4
            flex-1
            text-center

            tablet:text-left

            laptop:mb-8

            ${isDone ? `text-slate-300` : ''}
          `}
        >
          {recipeInstruction.text}
        </p>
        <div
          className={`
            flex
            flex-col
            gap-2
          `}
        >
          {recipeInstruction.timerNbMinutes > 0 && (
            <div
              className={`
                mb-4

                tablet:mb-0
              `}
            >
              <Timer
                completeMessage={`Le minuteur de l'étape ${index} est terminé`}
                nbSecondsToComplete={recipeInstruction.timerNbMinutes * 60}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`
          mx-auto
          w-fit
        `}
      >
        <BooleanInput
          className={`
            font-title
            text-3xl
            text-slate-400
          `}
          value={isDone}
          onChange={handleOnChange}
        >
          <>Terminé</>
        </BooleanInput>
      </div>
    </div>
  );
}
