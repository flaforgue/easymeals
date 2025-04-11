import BooleanInput from '#/components/inputs/boolean-input';
import TextInput from '#/components/inputs/text-input';
import OptionalIngredientCategoryInput from '#/modules/shared/ingredient-category/components/optional-ingredient-category-input';
import OptionalUnitInput from '#/modules/shared/unit/components/optional-unit-input';

interface ListIngredientsFormProps {
  search: string;
  setSearch: (v: string) => void;
  ingredientCategoryId: null | string;
  setIngredientCategoryId: (v: null | string) => void;
  unitId: null | string;
  setUnitId: (v: null | string) => void;
  isUserContent: boolean;
  setIsUserContent: (v: boolean) => void;
}

export default function ListIngredientsForm({
  search,
  setSearch,
  ingredientCategoryId,
  setIngredientCategoryId,
  unitId,
  setUnitId,
  isUserContent,
  setIsUserContent,
}: ListIngredientsFormProps) {
  return (
    <div
      className={`
        flex
        w-full
        flex-wrap
        items-center
        gap-2
      `}
    >
      <TextInput
        value={search}
        onChange={setSearch}
        placeholder="Nom de l'ingrédient"
        className={`
          min-w-48
          flex-1
        `}
      />
      <div
        className={`
          hidden

          tablet:block
        `}
      >
        <OptionalIngredientCategoryInput
          value={ingredientCategoryId}
          onChange={setIngredientCategoryId}
        />
      </div>
      <div
        className={`
          hidden

          tablet:block
        `}
      >
        <OptionalUnitInput
          value={unitId}
          onChange={setUnitId}
        />
      </div>
      <div
        className={`
          hidden

          tablet:block
        `}
      >
        <BooleanInput
          value={isUserContent}
          onChange={setIsUserContent}
        >
          <p>Mes ingrédient</p>
        </BooleanInput>
      </div>
    </div>
  );
}
