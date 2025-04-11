import { useNavigate, useParams } from 'react-router-dom';
import { usePublicRecipe } from '#/modules/cooking/recipe/queries';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import Stepper from '#/components/stepper/stepper';
import EditRecipeInfos from '#/modules/cooking/recipe/templates/edit-recipe-infos';
import EditRecipeIngredients from '#/modules/cooking/recipe/templates/edit-recipe-ingredients';
import { useQueryParamState } from '#/hooks/use-query-param-state';
import EditRecipeInstructions from '#/modules/cooking/recipe/templates/edit-recipe-instructions';
import IconCheck from '#/components/icons/icon-check';
import CreateButton from '#/components/buttons/simple-buttons/create-button';
import toast from 'react-hot-toast';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconDoubleArrowLeft from '#/components/icons/icon-double-arrow-left';

const steps = [
  {
    key: 'infos',
    title: 'Infos',
  },
  {
    key: 'ingredients',
    title: 'Ingrédients',
  },
  {
    key: 'instructions',
    title: 'Instructions',
  },
];

export default function EditRecipe() {
  const navigate = useNavigate();
  const [activeStepKey, setActiveStepKey] = useQueryParamState('step', 'infos');
  const recipeId = useParams().recipeId!;
  const recipe = usePublicRecipe(recipeId);

  const redirectToShowRecipe = () => navigate(`/app/recipes/${recipeId}`);

  const terminateRecipeCreation = () => {
    if (recipe === undefined) {
      return;
    }

    toast.success('Recette bien enregistrée', {
      id: 'global',
    });

    redirectToShowRecipe();
  };

  if (recipe === undefined) {
    return <MainContentLoadingOverlay />;
  }

  const stepperFirstStepPrevButton = (
    <DefaultButton
      onClick={redirectToShowRecipe}
      className="h-10"
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
            text-slate-500
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

  const stepperLastStepNextButton = (
    <CreateButton onClick={terminateRecipeCreation}>
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
          Valider
        </span>
        <div
          className={`
            w-4
            text-white
          `}
        >
          <IconCheck />
        </div>
      </div>
    </CreateButton>
  );

  return (
    <section className="min-w-screen">
      <div
        className={`
          -mb-4
          -ml-4
          -mr-4
          -mt-4
          bg-slate-50
          pb-16
        `}
      >
        <div
          className={`
            fixed
            left-0
            right-0
            top-0
            z-50

            tablet:left-20

            laptop:left-60
          `}
        >
          <Stepper
            steps={steps}
            activeStep={activeStepKey}
            setActiveStep={setActiveStepKey}
            prevButtonComponent={activeStepKey === 'infos' ? stepperFirstStepPrevButton : undefined}
            nextButtonComponent={activeStepKey === 'instructions' ? stepperLastStepNextButton : undefined}
          />
        </div>
        <div
          className={`
            mt-2
            flex
            min-h-screen
            px-8
            pb-8
            pt-24
          `}
        >
          {activeStepKey === 'infos' && <EditRecipeInfos recipe={recipe} />}
          {activeStepKey === 'ingredients' && <EditRecipeIngredients recipe={recipe} />}
          {activeStepKey === 'instructions' && <EditRecipeInstructions recipeId={recipeId} />}
        </div>
      </div>
    </section>
  );
}
