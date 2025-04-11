import CreateIconButton from '#/components/buttons/icon-buttons/create-icon-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconInfo from '#/components/icons/icon-info';
import Modal from '#/components/modals/modal';
import ToggleRecipeBookmarkIconButton from '#/modules/cooking/recipe-bookmark/components/toggle-recipe-bookmark-icon-button';
import { useRecipeBookmarks } from '#/modules/cooking/recipe-bookmark/queries';
import { useImportRecipeMutation } from '#/modules/cooking/recipe/mutations';
import { uuidv4 } from '#/shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ImportRecipeButtonProps {
  recipeId: string;
}
export default function ImportRecipeButton({ recipeId }: ImportRecipeButtonProps) {
  const recipeBookmarks = useRecipeBookmarks();
  const isBookmarked = recipeBookmarks.find((bookmark) => bookmark.recipeId === recipeId);

  const navigate = useNavigate();
  const mutation = useImportRecipeMutation();
  const importRecipe = () => {
    mutation.mutate(
      {
        recipeToCreateId: uuidv4(),
        recipeToImportId: recipeId,
      },
      {
        onSuccess: (_data, variables) => {
          navigate(`/app/recipes/${variables.recipeToCreateId}`);
        },
      },
    );
  };

  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <CreateIconButton
        icon="plus-linear"
        onClick={openModal}
        tooltipText="Ajouter à mes recettes"
      />
      <Modal
        isOpen={isModalOpened}
        size="small"
        onCancel={closeModal}
      >
        <div
          className={`
            flex
            flex-col
            gap-4
            p-2
          `}
        >
          <div
            className={`
              h-14
              text-sky-500
            `}
          >
            <IconInfo />
          </div>
          <div
            className={`
              my-4
              text-center
              text-slate-500
            `}
          >
            Cette recette va être copiée dans vos recettes personnelles. Une fois cela fait, vous serez libre de la
            modifier si vous souhaitez l&apos;adapter à votre goût.
            {!isBookmarked && (
              <div
                className={`
                  mt-4
                  rounded
                  bg-slate-100
                  p-2
                `}
              >
                <div className="leading-relaxed">
                  Si vous ne souhaitez pas modifier la recette, vous pouvez l&apos;ajoutez la simplement à vos
                  favoris&nbsp;:
                </div>
                <div className="my-2">
                  <ToggleRecipeBookmarkIconButton
                    recipeId={recipeId}
                    onBookmarked={closeModal}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={`
              flex
              justify-center
              gap-4
            `}
          >
            <DefaultButton onClick={closeModal}>Annuler</DefaultButton>
            <SubmitButton onClick={importRecipe}>Confirmer</SubmitButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
