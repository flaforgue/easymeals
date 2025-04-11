import { Meal, MealType } from '#/shared';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export interface DroppableMealData {
  date: number;
  mealType: MealType;
  meal: Meal | null;
}

export interface DraggableMealData {
  meal: Meal;
  initialDroppableId: string;
}

function buildDraggableId(meal: Meal): string {
  return `draggable-${meal.id}`;
}

function buildDroppableId(date: Date, mealType: MealType): string {
  return `droppable-${date.getTime()}-${mealType}`;
}

export function useMealDraggable(meal: Meal, isDisabled: boolean) {
  const draggable = useDraggable({
    id: buildDraggableId(meal),
    disabled: isDisabled,
    data: {
      meal: meal,
      initialDroppableId: buildDroppableId(new Date(meal.date), meal.mealType),
    } as DraggableMealData,
  });

  return {
    setNodeRef: draggable.setNodeRef,
    setActivatorNodeRef: draggable.setActivatorNodeRef,
    listeners: draggable.listeners,
    attributes: draggable.attributes,
    isDragging: draggable.isDragging,
    transform: CSS.Translate.toString(draggable.transform),
  };
}

export function useMealDroppable(
  data: {
    date: Date;
    mealType: MealType;
    meal: Meal | null;
  },
  isDisabled: boolean,
) {
  const droppableId = buildDroppableId(data.date, data.mealType);
  const droppable = useDroppable({
    id: droppableId,
    disabled: isDisabled,
    data: {
      date: data.date.getTime(),
      mealType: data.mealType,
      meal: data.meal,
    } as DroppableMealData,
  });

  const draggedMealData = droppable.active?.data?.current as DraggableMealData | undefined;
  const isDraggedMealInitialDropover = droppableId === draggedMealData?.initialDroppableId;

  const getMealToSwapWith = () => {
    if (!isDraggedMealInitialDropover) {
      return null;
    }

    const overData = droppable.over?.data?.current as DroppableMealData | undefined;
    const mealToSwapWith = overData?.meal ?? null;
    if (mealToSwapWith === null) {
      return null;
    }

    if (mealToSwapWith.id === data.meal?.id) {
      return null;
    }

    return mealToSwapWith;
  };
  const mealToSwapWith = getMealToSwapWith();

  return {
    setNodeRef: droppable.setNodeRef,
    isOver: droppable.isOver,
    isDraggedMealInitialDropover: isDraggedMealInitialDropover,
    mealToSwapWith: mealToSwapWith,
  };
}
