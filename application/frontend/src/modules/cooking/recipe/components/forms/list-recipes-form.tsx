import OptionalCuisineTypeInput from '#/modules/cooking/cuisine-type/components/optional-cuisine-type-input';
import { DropdownOption } from '#/components/dropdown/dropdown';
import SearchNameInput from '#/modules/cooking/recipe/components/inputs/search-name-input';
import IsUserContentInput from '#/modules/cooking/recipe/components/inputs/is-user-content-input';
import IsBookmarkInput from '#/modules/cooking/recipe/components/inputs/is-bookmark-input';
import IsVegetarianInput from '#/modules/cooking/recipe/components/inputs/is-vegetarian-input';
import IsFastInput from '#/modules/cooking/recipe/components/inputs/is-fast-input';
import FiltersDropdown from '#/modules/cooking/recipe/components/filters-dropdown';

interface ListRecipesFormProps {
  search: string;
  cuisineTypeId: null | string;
  isVegetarian: boolean;
  isFast: boolean;
  isUserContent: boolean;
  isBookmark: boolean;
  setSearch: (v: string) => void;
  setCuisineTypeId: (v: null | string) => void;
  setIsVegetarian: (v: boolean) => void;
  setIsFast: (v: boolean) => void;
  setIsUserContent: (v: boolean) => void;
  setIsBookmark: (v: boolean) => void;
}

export default function ListRecipesForm({
  search,
  cuisineTypeId,
  isVegetarian,
  isFast,
  isUserContent,
  isBookmark,
  setSearch,
  setCuisineTypeId,
  setIsVegetarian,
  setIsFast,
  setIsUserContent,
  setIsBookmark,
}: ListRecipesFormProps) {
  const dropdownOptions: DropdownOption[] = [
    {
      onClick: () => setIsUserContent(!isUserContent),
      children: <IsUserContentInput isUserContent={isUserContent} />,
    },
    {
      onClick: () => setIsBookmark(!isBookmark),
      children: <IsBookmarkInput isBookmark={isBookmark} />,
    },
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
