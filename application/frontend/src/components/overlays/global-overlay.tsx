interface GlobalOverlayProps {
  children?: JSX.Element;
}

export default function GlobalOverlay({ children }: GlobalOverlayProps) {
  return (
    <div
      className={`
        fixed
        left-0
        top-0
        z-50
        h-full
        w-full
        overflow-hidden
        bg-slate-500
        opacity-50
      `}
    >
      {children}
    </div>
  );
}
