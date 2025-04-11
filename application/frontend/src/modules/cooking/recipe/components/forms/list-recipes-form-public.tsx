import OptionalCuisineTypeInput from '#/modules/cooking/cuisine-type/components/optional-cuisine-type-input';
import { DropdownOption } from '#/components/dropdown/dropdown';
import SearchNameInput from '#/modules/cooking/recipe/components/inputs/search-name-input';
import IsFastInput from '#/modules/cooking/recipe/components/inputs/is-fast-input';
import IsVegetarianInput from '#/modules/cooking/recipe/components/inputs/is-vegetarian-input';
import FiltersDropdown from '#/modules/cooking/recipe/components/filters-dropdown';

interface ListRecipesFormPublicProps {
  search: string;
  cuisineTypeId: null | string;
  isVegetarian: boolean;
  isFast: boolean;
  setSearch: (v: string) => void;
  setCuisineTypeId: (v: null | string) => void;
  setIsVegetarian: (v: boolean) => void;
  setIsFast: (v: boolean) => void;
}

export default function ListRecipesFormPublic({
  search,
  cuisineTypeId,
  isVegetarian,
  isFast,
  setSearch,
  setCuisineTypeId,
  setIsVegetarian,
  setIsFast,
}: ListRecipesFormPublicProps) {
  const dropdownOptions: DropdownOption[] = [
    {
      onClick: () => setIsVegetarian(!isVegetarian),
      children: <IsVegetarianInput isVegetarian={isVegetarian} />,
    },
    {
      onClick: () => setIsFast(!isFast),
      children: <IsFastInput isFast={isFast} />,
    },
  ];

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
      <SearchNameInput
        search={search}
        setSearch={setSearch}
        className="flex-auto"
      />
      <div className="flex-auto">
        <OptionalCuisineTypeInput
          value={cuisineTypeId}
          onChange={setCuisineTypeId}
        />
      </div>
      <FiltersDropdown
        dropdownOptions={dropdownOptions}
        className="flex-auto"
      />
    </div>
  );
}
