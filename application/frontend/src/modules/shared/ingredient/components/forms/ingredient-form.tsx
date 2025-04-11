import TextInput from '#/components/inputs/text-input';
import IngredientCategoryInput from '#/modules/shared/ingredient-category/components/ingredient-category-input';
import UnitInput from '#/modules/shared/unit/components/unit-input';

interface IngredientFormProps {
  name: string;
  setName: (v: string) => void;
  unitId: string;
  setUnitId: (v: string) => void;
  ingredientCategoryId: string;
  setIngredientCategoryId: (v: string) => void;
}
export default function IngredientForm({
  name,
  setName,
  unitId,
  setUnitId,
  ingredientCategoryId,
  setIngredientCategoryId,
}: IngredientFormProps) {
  return (
    <div>
      <div
        className={`
          mb-2
          flex
          justify-between
          gap-2
        `}
      >
        <TextInput
          value={name}
          onChange={setName}
          className="w-full"
        />
        <UnitInput
          value={unitId}
          onChange={setUnitId}
        />
      </div>
      <div className="w-full">
        <IngredientCategoryInput
          value={ingredientCategoryId}
          onChange={setIngredientCategoryId}
        />
      </div>
    </div>
  );
}
