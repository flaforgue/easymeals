interface PulserProps {
  className?: string;
  colorClassName: string;
}

export default function Pulser({ colorClassName, className }: PulserProps) {
  return (
    <span
      className={`
        flex
        h-3
        w-3

        ${className ?? ''}
      `}
    >
      <span
        className={`
          ${colorClassName}

          absolute
          inline-flex
          h-full
          w-full
          animate-ping
          rounded-full
          opacity-75
        `}
      />
      <span
        className={`
          ${colorClassName}

          relative
          inline-flex
          h-3
          w-3
          rounded-full
        `}
      />
    </span>
  );
}
