import CheckboxInput from '#/components/inputs/checkbox-input';

interface IsVegetarianInputProps {
  isVegetarian: boolean;
}
export default function IsVegetarianInput({ isVegetarian }: IsVegetarianInputProps) {
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
          src="/icons/vegetarian.png"
        />
        <span>Végé</span>
      </div>
      <CheckboxInput value={isVegetarian} />
    </div>
  );
}
