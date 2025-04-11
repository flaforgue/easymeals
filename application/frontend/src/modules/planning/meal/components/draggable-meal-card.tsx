import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import DeleteIconButton from '#/components/buttons/icon-buttons/delete-icon-button';
import DeleteModal from '#/components/modals/delete-modal';
import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';
import EditMealModal from '#/modules/planning/meal/components/modals/edit-meal-modal';
import LocalOverlay from '#/components/overlays/local-overlay';
import { Meal as MealModel } from '#/shared';
import { useDeleteMealMutation } from '#/modules/planning/meal/mutations';
import { useState } from 'react';
import DefaultIconButton from '#/components/buttons/icon-buttons/default-icon-button';
import IconMove from '#/components/icons/icon-move';
import { useMealDraggable } from '#/modules/planning/meal/hooks/use-meal-drag-and-drop';

interface DraggableMealCardProps {
  meal: MealModel;
  isDragDisabled: boolean;
  onDeleteMeal: (mealId: string) => void;
}

export default function DraggableMealCard({ meal, isDragDisabled, onDeleteMeal }: DraggableMealCardProps) {
  const draggable = useMealDraggable(meal, isDragDisabled);

  const [isEditMealModalOpened, setIsEditMealModalOpened] = useState(false);
  const openEditMealModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditMealModalOpened(true);
  };
  const closeEditMealModal = () => setIsEditMealModalOpened(false);

  const [isDeleteMealModalOpened, setIsDeleteMealModalOpened] = useState(false);
  const openDeleteMealModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteMealModalOpened(true);
  };
  const closeDeleteMealModal = () => setIsDeleteMealModalOpened(false);

  const deleteMealMutation = useDeleteMealMutation();
  const handleDeleteMeal = () =>
    deleteMealMutation.mutate(
      { id: meal.id },
      {
        onSettled: () => {
          onDeleteMeal(meal.id);
          closeDeleteMealModal();
        },
      },
    );

  return (
    <>
      <div
        ref={draggable.setNodeRef}
        {...draggable.attributes}
        className={`
          relative
          flex
          h-full
          flex-col
          items-center

          ${
            draggable.isDragging
              ? `
                z-50
                opacity-75
              `
              : ''
          }
        `}
        style={{
          transform: draggable.transform,
        }}
      >
        <div
          ref={draggable.setActivatorNodeRef}
          className={`
            relative
            z-0
            w-full
            overflow-hidden
            rounded-t
          `}
          {...draggable.listeners}
        >
          {!isDragDisabled && (
            <LocalOverlay tooltipText={draggable.isDragging ? '' : meal.recipe.name}>
              <div
                className={`
                  h-8
                  w-8
                  text-white
                `}
              >
                <IconMove />
              </div>
            </LocalOverlay>
          )}
          <img
            src={meal.recipe.illustrationUrl ?? DEFAULT_RECIPE_ILLUSTRATION_URL}
            className={`
              h-full
              w-full
              object-cover
              object-center
            `}
          />
        </div>
        <div
          className={`
            flex
            w-full
            flex-col
            justify-between
            rounded-b
            bg-white
            p-2
            shadow
          `}
        >
          <div
            className={`
              flex
              w-full
              flex-wrap
              justify-between
              gap-x-4
            `}
          >
            <div
              className={`
                flex
                flex-1
                items-center
                justify-center
              `}
              data-tooltip-id="global"
              data-tooltip-content={`${meal.nbPortions} personnes`}
            >
              <img
                src="/icons/nb-portions.png"
                width="20"
                className={`
                  mr-2
                  inline
                `}
                alt="Nombre de personnes"
              />
              <span
                className={`
                  align-middle
                  text-slate-500
                `}
              >
                {meal.nbPortions}
              </span>
            </div>
            <div
              className={`
                flex
                flex-1
                items-start
                justify-center
              `}
            >
              <DefaultIconButton
                to={`/app/recipes/${meal.recipe.id}`}
                target="_blank"
                tooltipText="Voir la recette"
                icon="search"
              />
              <EditIconButton onClick={openEditMealModal} />
              <DeleteIconButton onClick={openDeleteMealModal} />
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleteMealModalOpened}
        body="Êtes-vous sûr(e) de vouloir supprimer ce repas ?"
        isSubmitting={deleteMealMutation.isPending}
        onConfirm={handleDeleteMeal}
        onCancel={closeDeleteMealModal}
      />
      <EditMealModal
        isOpen={isEditMealModalOpened}
        onCancel={closeEditMealModal}
        meal={meal}
      />
    </>
  );
}
