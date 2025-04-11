import CheckboxInput from '#/components/inputs/checkbox-input';

interface IsFastInputProps {
  isFast: boolean;
}
export default function IsFastInput({ isFast }: IsFastInputProps) {
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
          src="/icons/fast.png"
        />
        <span>Rapide</span>
      </div>
      <CheckboxInput value={isFast} />
    </div>
  );
}
