import { DAY_LABELS, MEAL_LABELS, MONTH_LABELS, mealTypes } from '#/modules/planning/meal/constants';
import BooleanInput from '#/components/inputs/boolean-input';
import Card from '#/components/cards/card';
import CreateMealButton from '#/modules/planning/meal/components/buttons/create-meal-button';
import DraggableMealCard from '#/modules/planning/meal/components/draggable-meal-card';
import { MealsByTypes } from '#/modules/planning/meal/queries';
import LinedTitle from '#/components/lined-title';
import MealCardGhost from '#/modules/planning/meal/components/meal-card-ghost';
import { useMealDroppable } from '#/modules/planning/meal/hooks/use-meal-drag-and-drop';

const dayStyles = [
  {
    background: 'from-green-50 to-cyan-50',
    text: 'text-emerald-500',
    border: 'border-emerald-300',
  },
  {
    background: 'from-cyan-50 to-sky-50',
    text: 'text-cyan-500',
    border: 'border-cyan-300',
  },
  {
    background: 'from-sky-50 to-fuchsia-50',
    text: 'text-indigo-500',
    border: 'border-indigo-300',
  },
  {
    background: 'from-fuchsia-50 to-pink-50',
    text: 'text-pink-500',
    border: 'border-pink-300',
  },
  {
    background: 'from-pink-50 to-orange-50',
    text: 'text-orange-500',
    border: 'border-orange-300',
  },
  {
    background: 'from-orange-50 to-lime-50',
    text: 'text-yellow-500',
    border: 'border-yellow-300',
  },
  {
    background: 'from-lime-50 to-green-50',
    text: 'text-lime-500',
    border: 'border-lime-300',
  },
];

interface DayMealsProps {
  date: Date;
  meals: null | MealsByTypes;
  shoppingListMealIds: string[];
  isDragDisabled: boolean;
  toggleShoppingListMealId: (mealId: string) => void;
}

export default function DayMeals({
  date,
  meals,
  shoppingListMealIds,
  isDragDisabled,
  toggleShoppingListMealId,
}: DayMealsProps) {
  const today = new Date();
  const dateDay = date.getDay();
  const dayStyle = dayStyles[dateDay];
  const dayLabel = DAY_LABELS[dateDay];
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const droppables = {
    lunch: useMealDroppable({ date: date, mealType: 'lunch', meal: meals?.lunch ?? null }, isDragDisabled),
    dinner: useMealDroppable({ date: date, mealType: 'dinner', meal: meals?.dinner ?? null }, isDragDisabled),
  };

  const removeMealFromShoppingList = (mealId: string) => {
    if (shoppingListMealIds.includes(mealId)) {
      toggleShoppingListMealId(mealId);
    }
  };

  const mealComponents = mealTypes.map((mealType) => {
    const droppable = droppables[mealType];
    const meal = meals?.[mealType] ?? null;
    const mealComponent =
      meal !== null ? (
        <div
          className={`
            h-full
            w-full
          `}
        >
          <DraggableMealCard
            meal={meal}
            onDeleteMeal={removeMealFromShoppingList}
            isDragDisabled={isDragDisabled}
          />
        </div>
      ) : (
        <div
          className={`
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
          `}
        >
          <CreateMealButton
            date={date}
            mealType={mealType}
          />
        </div>
      );
    const mealTypeTitle =
      meal !== null ? (
        <div className="h-8">
          <BooleanInput
            value={shoppingListMealIds.includes(meal.id)}
            onChange={() => toggleShoppingListMealId(meal.id)}
            size="small"
          >
            <p className={dayStyle.text}>{MEAL_LABELS[mealType]}</p>
          </BooleanInput>
        </div>
      ) : (
        <p
          className={`
            ${dayStyle.text}

            p-1
          `}
        >
          {MEAL_LABELS[mealType]}
        </p>
      );

    return (
      <div key={mealType}>
        <LinedTitle
          className="my-2"
          borderclassName={dayStyle.border}
        >
          {mealTypeTitle}
        </LinedTitle>
        <div
          ref={droppable.setNodeRef}
          className={`
            relative
            h-36
            w-full
            rounded
            transition-all

            2xl:h-56

            ${
              droppable.isOver
                ? `
                  bg-slate-700
                  bg-opacity-25
                `
                : ''
            }
          `}
        >
          <div
            className={`
              absolute
              left-0
              top-0
              h-full
              w-full
              transition-opacity

              ${droppable.mealToSwapWith === null ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <MealCardGhost meal={droppable.mealToSwapWith} />
          </div>
          <div
            className={`
              h-full
              w-full
              transition-opacity

              ${!droppable.isDraggedMealInitialDropover && droppable.isOver ? 'opacity-0' : 'opacity-100'}
            `}
          >
            {mealComponent}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Card
      className={`
        rounded-md
        bg-gradient-to-r
        pb-2

        ${
          isToday
            ? `
              border-2
              border-sky-300
            `
            : ''
        }
        ${dayStyle.background}
      `}
    >
      <div
        className={`
          p-2
          py-4
          pb-2
        `}
      >
        <div
          className={`
            mb-6
            text-center
          `}
        >
          <div
            className={`
              ${dayStyle.text}
              ${isToday ? 'font-semibold' : ''}

              mb-2
            `}
          >
            {`${dayLabel}`}
          </div>
          <div
            className={`
              inline
              rounded-full
              px-4
              py-1
              text-2xl
              font-semibold

              ${
                isToday
                  ? `
                    bg-sky-500
                    text-white
                  `
                  : dayStyle.text
              }
            `}
          >
            {date.getDate()}
            <span
              className={`
                ml-1
                text-sm
              `}
            >
              {`${MONTH_LABELS[date.getMonth()]}`}
            </span>
          </div>
        </div>
        <div
          className={`
            flex
            flex-col
          `}
        >
          {mealComponents}
        </div>
      </div>
    </Card>
  );
}
