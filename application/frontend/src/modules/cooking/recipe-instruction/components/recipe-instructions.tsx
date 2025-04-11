import CreateActionButton from '#/components/buttons/action-buttons/create-action-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconDefaultEmptyState from '#/components/icons/icon-default-empty-state';
import Modal from '#/components/modals/modal';
import ProgressSteps from '#/components/progress/progress-steps';
import useAnimationPlayedOnce from '#/hooks/use-animation-played-once';
import hasBeenScrolledOut from '#/hooks/use-has-been-scrolled-out';
import RecipeInstruction from '#/modules/cooking/recipe-instruction/components/recipe-instruction';
import { useRecipeInstructions } from '#/modules/cooking/recipe-instruction/queries';
import TakePictureForm from '#/modules/cooking/recipe/components/forms/take-picture-form';
import { Recipe } from '#/shared';
import { Player } from '@lottiefiles/react-lottie-player';
import { useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PROGRESS_BAR_SCROLL_OFFSET = 72;

interface RecipeInstructionsProps {
  recipe: Recipe;
  userHouseId: string | undefined;
}

export default function RecipeInstructions({ recipe, userHouseId }: RecipeInstructionsProps) {
  const isUserRecipe = recipe.houseId === userHouseId;
  const recipeInstructions = useRecipeInstructions(recipe.id);
  const navigate = useNavigate();
  const redirectToEditRecipeInstructions = () => navigate(`/app/recipes/${recipe.id}/edit?step=instructions`);
  const id = useId();
  const getElementId = (instructionId: string) => `${id}-recipe-instruction-${instructionId}`;
  const [doneInstructionIds, setDoneInstructionIds] = useState<string[]>([]);
  const resetProgression = () => {
    scrollToInstruction(recipeInstructions[0].id);
    setDoneInstructionIds([]);
  };
  const onInstructionChecked = (instructionId: string, isDone: boolean) => {
    if (!isDone) {
      setDoneInstructionIds(doneInstructionIds.filter((i) => i !== instructionId));

      return;
    }

    if (doneInstructionIds.includes(instructionId)) {
      return;
    }

    setDoneInstructionIds([...doneInstructionIds, instructionId]);

    scrollToNextInstruction(instructionId);
  };

  const scrollToInstruction = (instructionId: string) => {
    const instructionElement = document.getElementById(getElementId(instructionId));
    if (instructionElement === null) {
      return;
    }

    const instructionElementTop = instructionElement.getBoundingClientRect().top;
    const progressBarOffset = shouldShowFixedProgressBar ? PROGRESS_BAR_SCROLL_OFFSET : 0;
    window.scrollTo({
      top: window.scrollY + instructionElementTop - progressBarOffset,
      behavior: 'smooth',
    });
  };
  const scrollToNextInstruction = (instructionId: string) => {
    const currentInstructionIndex = recipeInstructions.findIndex((i) => i.id === instructionId);
    const nextInstructionId = recipeInstructions[currentInstructionIndex + 1]?.id ?? '';
    scrollToInstruction(nextInstructionId);
  };

  const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);
  const closeFinalModal = () => setIsFinalModalOpen(false);
  const openTakePictureModal = () => {
    if (isUserRecipe && isRecipeComplete && recipe.illustrationUrl === null) {
      setIsFinalModalOpen(true);
    }
  };

  const staticProgressBarRef = useRef<HTMLDivElement | null>(null);
  const shouldShowFixedProgressBar = hasBeenScrolledOut(staticProgressBarRef);
  const isRecipeComplete = recipeInstructions.length > 0 && doneInstructionIds.length === recipeInstructions.length;
  const isSuccessAnimationPlaying = useAnimationPlayedOnce(isRecipeComplete, 1500, openTakePictureModal);
  const recipeProgressSteps = recipeInstructions.map((recipeInstruction) => {
    return {
      id: recipeInstruction.id,
      isDone: doneInstructionIds.includes(recipeInstruction.id),
      onClick: () => scrollToInstruction(recipeInstruction.id),
    };
  });
  const recipeProgressComponent = (
    <ProgressSteps
      onReset={resetProgression}
      steps={recipeProgressSteps}
    />
  );

  if (recipeInstructions.length === 0) {
    return (
      <div
        className={`
          flex
          flex-col
          items-center
          justify-center
          gap-4
          px-8
          pb-8
        `}
      >
        <div className="text-orange-400">
          <IconDefaultEmptyState />
        </div>
        {isUserRecipe && (
          <CreateActionButton
            onClick={redirectToEditRecipeInstructions}
            icon="plus"
            label="Ajouter les instructions"
          />
        )}
      </div>
    );
  }

  return (
    <div className="px-2">
      <div
        className={`
          relative
          flex
          flex-col
          gap-2
          pt-4

          tablet:px-2
        `}
      >
        {doneInstructionIds.length > 0 && <div ref={staticProgressBarRef}>{recipeProgressComponent}</div>}
        {doneInstructionIds.length > 0 && (
          <div
            className={`
              fixed
              left-[17px]
              top-0
              z-50
              w-[calc(100%-34px)]
              px-2

              tablet:left-[97px]
              tablet:w-[calc(100%-114px)]
              tablet:px-4

              laptop:left-[257px]
              laptop:w-[calc(100%-274px)]

              ${shouldShowFixedProgressBar ? '' : `hidden`}

              bg-slate-100
              shadow-md
            `}
          >
            {recipeProgressComponent}
          </div>
        )}

        <div className="pb-6">
          {recipeInstructions.map((recipeInstruction, index) => {
            return (
              <div
                key={recipeInstruction.id}
                id={getElementId(recipeInstruction.id)}
              >
                <RecipeInstruction
                  index={index + 1}
                  isDone={doneInstructionIds.includes(recipeInstruction.id)}
                  recipeInstruction={recipeInstruction}
                  onInstructionChecked={onInstructionChecked}
                />
              </div>
            );
          })}
        </div>
      </div>
      {isUserRecipe && (
        <Modal
          isOpen={isFinalModalOpen}
          size="small"
          onCancel={closeFinalModal}
        >
          <div
            className={`
              p-4
              text-slate-500
            `}
          >
            <p
              className={`
                mb-4
                text-center
              `}
            >
              Prenez une photo du résultat pour illustrer votre recette&nbsp;!
            </p>
            <TakePictureForm recipe={recipe} />
            <p
              className={`
                my-2
                text-center
              `}
            >
              Ou
            </p>
            <DefaultButton
              className="w-full"
              onClick={closeFinalModal}
            >
              Annuler
            </DefaultButton>
          </div>
        </Modal>
      )}
      {isSuccessAnimationPlaying && (
        <Player
          src="/lotties/fireworks.json"
          autoplay={true}
          className={`
            fixed
            left-0
            top-0
            h-full
            w-full

            tablet:left-10

            laptop:left-32
          `}
        />
      )}
    </div>
  );
}
