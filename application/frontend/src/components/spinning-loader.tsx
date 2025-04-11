import IconLoader from '#/components/icons/icon-loader';

export default function SpinningLoader() {
  return (
    <div
      role="status"
      className={`
        h-full
        w-full
        animate-spin
      `}
    >
      <IconLoader />
    </div>
  );
}
