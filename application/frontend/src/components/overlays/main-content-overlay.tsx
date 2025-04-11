interface MainContentOverlayProps {
  children?: JSX.Element;
}

export default function MainContentOverlay({ children }: MainContentOverlayProps) {
  return (
    <div
      className={`
        fixed
        inset-0
        left-0
        top-0
        z-50
        h-full
        w-full
        overflow-hidden
        bg-slate-500
        text-slate-500
        opacity-50

        tablet:left-20

        laptop:left-60
      `}
    >
      {children}
    </div>
  );
}
