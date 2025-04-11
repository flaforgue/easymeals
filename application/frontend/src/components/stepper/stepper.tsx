import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconCheck from '#/components/icons/icon-check';
import IconDoubleArrowLeft from '#/components/icons/icon-double-arrow-left';
import IconDoubleArrowRight from '#/components/icons/icon-double-arrow-right';
import { ReactNode } from 'react';

interface Step {
  key: string;
  title: string;
  isDisabled?: boolean;
  tooltipMessage?: string;
}

interface StepperProps {
  steps: Step[];
  activeStep: string;
  setActiveStep: (v: string) => void;
  nextButtonComponent?: ReactNode;
  prevButtonComponent?: ReactNode;
}
export default function Stepper({
  steps,
  activeStep,
  setActiveStep,
  prevButtonComponent,
  nextButtonComponent,
}: StepperProps) {
  const activeStepIndex = steps.findIndex((step) => step.key === activeStep);
  const isFirstStepActive = activeStepIndex === 0;
  const isLastStepActive = activeStepIndex === steps.length - 1;
  const incrementActiveStep = () => {
    setActiveStep(steps[activeStepIndex + 1].key);
  };
  const decrementActiveStep = () => {
    setActiveStep(steps[activeStepIndex - 1].key);
  };

  const defaultPrevButtonComponent = (
    <DefaultButton
      isDisabled={isFirstStepActive}
      onClick={decrementActiveStep}
      className={`
        h-10

        ${
          isFirstStepActive
            ? `
              cursor-default
              opacity-0
            `
            : ''
        }
      `}
    >
      <div
        className={`
          flex
          gap-2
        `}
      >
        <div
          className={`
            w-2

            ${isFirstStepActive ? 'text-slate-300' : `text-slate-500`}
          `}
        >
          <IconDoubleArrowLeft />
        </div>
        <span
          className={`
            hidden

            laptop:inline
          `}
        >
          Précédent
        </span>
      </div>
    </DefaultButton>
  );

  const defaultNextButtonComponent = (
    <SubmitButton
      onClick={incrementActiveStep}
      className={`
        ${
          isLastStepActive
            ? `
              cursor-default
              opacity-0
            `
            : ''
        }
      `}
    >
      <div
        className={`
          flex
          gap-2
        `}
      >
        <span
          className={`
            hidden

            laptop:inline
          `}
        >
          Suivant
        </span>
        <div
          className={`
            w-2
            text-white
          `}
        >
          <IconDoubleArrowRight />
        </div>
      </div>
    </SubmitButton>
  );

  return (
    <>
      <div
        className={`
          itemx-center
          flex
          w-full
          justify-between
          gap-4
          rounded-t
          border-slate-200
          bg-white
          p-4
          shadow
        `}
      >
        {prevButtonComponent !== undefined ? prevButtonComponent : defaultPrevButtonComponent}
        <ol
          className={`
            flex
            w-full
            items-center
            justify-center
            gap-2
            text-center
            text-xs
            font-medium
            text-slate-500

            tablet:text-sm

            laptop:gap-4
          `}
        >
          {steps.map((step, index) => {
            const isValidated = index < activeStepIndex;
            const isActiveStep = activeStep === step.key;
            const onStepClick = () => {
              if (step.isDisabled !== true) {
                setActiveStep(step.key);
              }
            };

            return (
              <li
                key={step.key}
                onClick={onStepClick}
                className={`
                  group
                  flex
                  items-center
                  transition-all

                  ${isActiveStep ? `text-sky-500` : ''}
                  ${isValidated ? `text-green-500` : ''}
                  ${
                    !isActiveStep && !isValidated
                      ? `
                        text-slate-300

                        hover:text-slate-400
                      `
                      : ''
                  }
                  ${step.isDisabled === true ? `cursor-not-allowed` : `cursor-pointer`}
                `}
                data-tooltip-id="global"
                data-tooltip-content={step.tooltipMessage ?? ''}
              >
                <span
                  className={`
                    font-mono
                    mr-2
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    text-white
                    transition-all

                    ${isActiveStep ? `bg-sky-500` : ''}
                    ${isValidated ? `bg-green-500` : ''}
                    ${
                      !isActiveStep && !isValidated
                        ? `
                          bg-slate-300

                          group-hover:bg-slate-400
                        `
                        : ''
                    }
                  `}
                >
                  {isValidated ? <IconCheck /> : index + 1}
                </span>
                <span
                  className={`
                    hidden

                    mobile:inline
                  `}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      ml-2
                      w-4

                      laptop:ml-4

                      ${isValidated ? `text-green-500` : `text-slate-300`}
                    `}
                  >
                    <IconDoubleArrowRight />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        {nextButtonComponent !== undefined ? nextButtonComponent : defaultNextButtonComponent}
      </div>
    </>
  );
}
