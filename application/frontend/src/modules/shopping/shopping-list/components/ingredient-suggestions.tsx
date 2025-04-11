import { SuggestedIngredient } from '#/shared';
import Accordion from '#/components/accordion/accordion';
import { AccordionItemData } from '#/components/accordion/accordion-item';
import CreateIconButton from '#/components/buttons/icon-buttons/create-icon-button';
import DefaultIconButton from '#/components/buttons/icon-buttons/default-icon-button';

interface IngredientSuggestionsProps {
  suggestedIngredients: SuggestedIngredient[];
  onSuggestionAccepted: (ingredientId: string, quantity: number) => void;
  onSuggestionDeleted: (ingredientId: string) => void;
}
export default function IngredientSuggestions({
  suggestedIngredients,
  onSuggestionAccepted,
  onSuggestionDeleted,
}: IngredientSuggestionsProps) {
  const accordionItem: AccordionItemData = {
    id: 'suggestions',
    color: 'green',
    headerFactory: (isOpen: boolean) => {
      return (
        <div className="flex w-full items-center p-2 text-lg text-slate-700">
          <img
            height="45"
            width="45"
            src="/icons/check.png"
            className="mr-2 overflow-visible rounded-full bg-white p-2 shadow"
          />
          <div>
            <p className={isOpen ? 'text-white' : ''}>Vérifiez s&apos;il vous en reste</p>
            <p className={`text-sm ${isOpen ? 'text-green-100' : 'text-slate-500'}`}>
              Ces éléments sont nécessaires pour vos recettes mais ne font pas encore partie de votre liste de courses
            </p>
          </div>
        </div>
      );
    },
    children: (
      <ul className="flex flex-wrap gap-x-4 p-4 text-slate-700">
        {suggestedIngredients.map((suggestedIngredient) => {
          const handleAcceptSuggestionClick = () =>
            onSuggestionAccepted(suggestedIngredient.ingredientId, suggestedIngredient.quantity);

          const handleDeleteSuggestionClick = () => onSuggestionDeleted(suggestedIngredient.ingredientId);

          return (
            <li
              key={suggestedIngredient.ingredientId}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded
                px-2
                py-1
                transition-all

                hover:bg-white

                laptop:w-[calc(50%-0.5rem)]
              `}
            >
              <div
                className={`
                  flex
                  items-center
                `}
              >
                <DefaultIconButton
                  icon="cross"
                  onClick={handleDeleteSuggestionClick}
                  tooltipText="Il m'en reste assez"
                />
                <CreateIconButton
                  icon="shopping"
                  onClick={handleAcceptSuggestionClick}
                  tooltipText="Ajouter à la liste"
                />
                {suggestedIngredient.ingredientName}
                {suggestedIngredient.unitAbbreviation !== '' && (
                  <>
                    &nbsp;
                    {`(${suggestedIngredient.quantity}${suggestedIngredient.unitAbbreviation})`}
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    ),
  };

  return (
    <Accordion
      items={[accordionItem]}
      initialStateActiveId="suggestions"
    />
  );
}
