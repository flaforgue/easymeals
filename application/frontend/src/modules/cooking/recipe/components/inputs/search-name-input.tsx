import TextInput from '#/components/inputs/text-input';

interface SearchNameInputProps {
  search: string;
  setSearch: (v: string) => void;
  className?: string;
}

export default function SearchNameInput({ search, setSearch, className }: SearchNameInputProps) {
  return (
    <TextInput
      value={search}
      onChange={setSearch}
      placeholder="Nom de la recette"
      className={`
        ${className}

        min-w-48
      `}
    />
  );
}
