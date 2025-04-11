import GlobalOverlay from '#/components/overlays/global-overlay';
import SpinningLoader from '#/components/spinning-loader';

export default function GlobalLoadingOverlay() {
  return (
    <GlobalOverlay>
      <div
        className={`
          fixed
          left-[calc(50%-2.5rem)]
          top-[calc(50%-2.5rem)]
          h-20
          w-20
          text-slate-500
        `}
      >
        <SpinningLoader />
      </div>
    </GlobalOverlay>
  );
}
