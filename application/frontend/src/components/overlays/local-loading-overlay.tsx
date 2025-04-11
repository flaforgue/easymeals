import SpinningLoader from '#/components/spinning-loader';

interface LocalLoadingOverlayProps {
  className?: string;
}

export default function LocalLoadingOverlay({ className = '' }: LocalLoadingOverlayProps) {
  return (
    <div
      className={`
        align-center
        absolute
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-500
        opacity-50
        transition-opacity

        ${className}
      `}
    >
      <div
        className={`
          left-[calc(50%-2rem)]
          top-[calc(50%-2rem)]
          h-16
          w-16
          text-slate-500
        `}
      >
        <SpinningLoader />
      </div>
    </div>
  );
}
