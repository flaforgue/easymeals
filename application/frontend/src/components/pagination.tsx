import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconBack from '#/components/icons/icon-back';
import IconForward from '#/components/icons/icon-forward';

interface PaginationProps {
  onNext: () => void;
  nextLabel?: string;
  onPrevious: () => void;
  previousLabel?: string;
  currentPage: number;
  isCurrentPageFull: boolean;
}
export default function Pagination({
  onNext,
  nextLabel,
  onPrevious,
  previousLabel,
  currentPage,
  isCurrentPageFull,
}: PaginationProps) {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
      `}
    >
      <DefaultButton
        onClick={onPrevious}
        isDisabled={currentPage <= 1}
      >
        <div
          className={`
            flex
            items-center
            gap-2
          `}
        >
          <div className="h-5">
            <IconBack />
          </div>
          {previousLabel ?? ''}
        </div>
      </DefaultButton>
      <div
        className={`
          mx-4
          inline-block
          min-w-10
          rounded-lg
          bg-slate-400
          py-2
          text-center
          text-white
        `}
      >
        {currentPage}
      </div>
      <DefaultButton
        onClick={onNext}
        isDisabled={!isCurrentPageFull}
      >
        <div
          className={`
            flex
            items-center
            gap-2
          `}
        >
          {nextLabel ?? ''}
          <div className="h-5">
            <IconForward />
          </div>
        </div>
      </DefaultButton>
    </div>
  );
}
