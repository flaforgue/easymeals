import DefaultActionButton from '#/components/buttons/action-buttons/default-action-button';
import { usePreviousValue } from '#/hooks/use-previous-value';
import { useCallback, useEffect, useId, useRef } from 'react';

interface ProgressStep {
  id: string;
  isDone: boolean;
  onClick: () => void;
}

interface ProgressStepsProps {
  onReset: () => void;
  steps: ProgressStep[];
}

export default function ProgressSteps({ onReset, steps }: ProgressStepsProps) {
  const id = useId();
  const scrollableContainerRef = useRef<null | HTMLDivElement>(null);
  const previousSteps = usePreviousValue(steps);

  const getElementId = useCallback((prefixId: string, stepId: string) => `${prefixId}-progress-step-${stepId}`, []);

  useEffect(() => {
    if (scrollableContainerRef.current === null) {
      return;
    }

    const recentlyDoneStep = steps.find((step, index) => step.isDone && !previousSteps[index].isDone);

    if (recentlyDoneStep === undefined) {
      return;
    }

    const recentlyDoneStepElement = document.getElementById(getElementId(id, recentlyDoneStep.id));
    if (recentlyDoneStepElement === null) {
      return;
    }

    scrollableContainerRef.current.scrollTo({
      left: scrollableContainerRef.current.scrollLeft + recentlyDoneStepElement.getBoundingClientRect().left,
      behavior: 'smooth',
    });
  }, [getElementId, id, previousSteps, steps]);

  return (
    <div
      ref={scrollableContainerRef}
      className={`
        flex
        max-w-full
        items-center
        gap-2
        overflow-auto
        bg-slate-100
        p-4

        tablet:gap-4
      `}
    >
      <DefaultActionButton
        onClick={onReset}
        icon="refresh"
        tooltipText="Réinitialiser la progression"
        className="min-w-fit"
      />
      <div
        className={`
          flex
          flex-1
          items-center
          justify-center
        `}
      >
        {steps.map((step, index) => {
          return (
            <div
              key={step.id}
              className={`
                flex
                items-center
              `}
              id={getElementId(id, step.id)}
            >
              {index > 0 && (
                <div
                  className={`
                    -ml-1
                    -mr-1
                    h-1
                    w-8
                    transition-all

                    ${step.isDone ? `bg-green-500` : `bg-white`}
                  `}
                />
              )}
              <div
                onClick={step.onClick}
                className={`
                  z-1
                  relative
                  flex
                  h-8
                  w-8
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  font-title
                  transition-all

                  ${
                    step.isDone
                      ? `
                        bg-green-500
                        text-white

                        hover:bg-green-600
                      `
                      : `
                        bg-white
                        text-slate-500

                        hover:bg-slate-50
                      `
                  }
                `}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
