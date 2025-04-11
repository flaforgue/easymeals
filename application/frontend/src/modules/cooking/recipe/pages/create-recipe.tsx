import CreateButton from '#/components/buttons/simple-buttons/create-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconDoubleArrowLeft from '#/components/icons/icon-double-arrow-left';
import IconDoubleArrowRight from '#/components/icons/icon-double-arrow-right';
import Stepper from '#/components/stepper/stepper';
import RecipeForm from '#/modules/cooking/recipe/templates/recipe-form';
import { useCreateRecipeMutation } from '#/modules/cooking/recipe/mutations';
import { getRandomItem } from '#/utils/array';
import { uuidv4 } from '#/shared';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    key: 'infos',
    title: 'Infos',
  },
  {
    key: 'ingredients',
    title: 'Ingrédients',
    isDisabled: true,
    tooltipMessage: "Créez d'abord votre recette",
  },
  {
    key: 'instructions',
    title: 'Instructions',
    isDisabled: true,
    tooltipMessage: "Créez d'abord votre recette",
  },
];

const namePlaceholders = [
  'Quiche lorraine',
  'Galettes bretonnes',
  'Couscous',
  'Blanquette de veau',
  "Gigot d'agneau",
  'Boeuf bourguignon',
  'Raclette',
  'Tomates farcies',
  'Poulet basquaise',
  'Carbonnade flamande',
  'Gratin dauphinois',
  'Cassoulet',
  'Coq au vin',
  'Tartiflette',
  'Choucroute',
  'Hachis parmentier',
  'Ratatouille',
  'Magret de canard à la poêle',
  'Morbiflette',
  'Petit salé',
  'Poulet fermier à la normande',
  'Shakshuka',
  'Escalopes à la parmigiana',
  'Sole meunière',
  'Le poulet du dimanche',
];

export default function CreateRecipe() {
  const navigate = useNavigate();
  const redirectToRecipes = () => navigate('/app/recipes');

  const [name, setName] = useState('');
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState(30);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [cuisineTypeId, setCuisineTypeId] = useState('');
  const [preparationTimeInMinutes, setPreparationTimeInMinutes] = useState(30);
  const [illustrationUrl, setIllustrationUrl] = useState<string | null>(null);

  const isFormValid = name !== '' && cuisineTypeId !== '';
  const specialNamePlacholder = useMemo(() => getRandomItem(namePlaceholders), []);

  const mutation = useCreateRecipeMutation();
  const createRecipe = () => {
    if (!isFormValid) {
      return;
    }

    const recipeId = uuidv4();
    mutation.mutate(
      {
        id: recipeId,
        name: name,
        totalTimeInMinutes: totalTimeInMinutes,
        isVegetarian: isVegetarian,
        cuisineTypeId: cuisineTypeId,
        preparationTimeInMinutes: preparationTimeInMinutes,
        illustrationUrl: illustrationUrl,
      },
      {
        onSuccess: () => navigate(`/app/recipes/${recipeId}/edit?step=ingredients`),
      },
    );
  };

  const stepperPrevButton = (
    <DefaultButton
      onClick={redirectToRecipes}
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

  const stepperNextButton = (
    <CreateButton
      onClick={createRecipe}
      isDisabled={!isFormValid}
      tooltipText={isFormValid ? '' : 'Veuillez donner un nom à votre recette'}
      className={`
        flex
        h-10
        items-center

        laptop:inline-flex
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
          Créer
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
            activeStep="infos"
            setActiveStep={() => {}}
            prevButtonComponent={stepperPrevButton}
            nextButtonComponent={stepperNextButton}
          />
        </div>

        <div
          className={`
            mt-2
            flex
            min-h-screen
            items-center
            px-8
            pb-8
            pt-24
          `}
        >
          <RecipeForm
            name={name}
            illustrationUrl={illustrationUrl}
            preparationTimeInMinutes={preparationTimeInMinutes}
            totalTimeInMinutes={totalTimeInMinutes}
            isVegetarian={isVegetarian}
            cuisineTypeId={cuisineTypeId}
            setName={setName}
            specialNamePlacholder={specialNamePlacholder}
            setIllustrationUrl={setIllustrationUrl}
            setPreparationTimeInMinutes={setPreparationTimeInMinutes}
            setTotalTimeInMinutes={setTotalTimeInMinutes}
            setIsVegetarian={setIsVegetarian}
            setCuisineTypeId={setCuisineTypeId}
          />
        </div>
      </div>
    </section>
  );
}
