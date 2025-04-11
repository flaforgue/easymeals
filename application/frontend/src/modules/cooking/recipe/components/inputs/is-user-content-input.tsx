import CheckboxInput from '#/components/inputs/checkbox-input';

interface IsUserContentInputProps {
  isUserContent: boolean;
}
export default function IsUserContentInput({ isUserContent }: IsUserContentInputProps) {
  return (
    <div
      className={`
        flex
        w-full
        items-center
        justify-between
        gap-2
        px-1
        py-0.5
      `}
    >
      <div
        className={`
          flex
          w-full
          items-center
          gap-2
        `}
      >
        <img
          width="16"
          src="/icons/user-recipe.png"
        />
        <span>Recette perso</span>
      </div>
      <CheckboxInput value={isUserContent} />
    </div>
  );
}
