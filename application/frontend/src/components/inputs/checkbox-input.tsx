interface CheckboxInputProps {
  value: boolean;
  onChange?: (v: boolean) => void;
}
export default function CheckboxInput({ value, onChange }: CheckboxInputProps) {
  const toggle = () => onChange?.(!value);

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={toggle}
      className={`
        h-5
        max-h-5
        min-h-5
        w-5
        min-w-5
        max-w-5
        cursor-pointer
        appearance-none
        rounded-full
        border

        bg-[length:0.55em_0.55em]

        bg-center
        bg-no-repeat
        align-middle
        text-green-500
        shadow
        transition-colors
        duration-75
        ease-in

        checked:bg-current
      `}
    />
  );
}
