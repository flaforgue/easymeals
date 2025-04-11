import MainContentOverlay from '#/components/overlays/main-content-overlay';
import SpinningLoader from '#/components/spinning-loader';

export default function MainContentLoadingOverlay() {
  return (
    <MainContentOverlay>
      <div
        className={`
          fixed
          left-[calc(50%-2.5rem)]
          top-[calc(50%-2.5rem)]
          h-20
          w-20

          sm:ml-32
        `}
      >
        <SpinningLoader />
      </div>
    </MainContentOverlay>
  );
}
