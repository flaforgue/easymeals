import IconUnbookmark from '#/components/icons/icon-unbookmark';
import CheckboxInput from '#/components/inputs/checkbox-input';

interface IsBookmarkInputProps {
  isBookmark: boolean;
}

export default function IsBookmarkInput({ isBookmark }: IsBookmarkInputProps) {
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
        <div
          className={`
            h-3.5
            w-3.5
            text-green-600
          `}
        >
          <IconUnbookmark />
        </div>
        <span>En favoris</span>
      </div>
      <CheckboxInput value={isBookmark} />
    </div>
  );
}
