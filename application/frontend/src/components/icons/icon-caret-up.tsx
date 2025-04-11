import IconCaretDown from '#/components/icons/icon-caret-down';

export default function IconCaretUp() {
  return (
    <div
      className={`
        h-full
        rotate-180
      `}
    >
      <IconCaretDown />
    </div>
  );
}
