interface TagProps {
  text: string;
  className?: string;
  tooltipText?: string;
  onClick?: () => void;
}

export default function Tag({ className, text, tooltipText, onClick }: TagProps) {
  return (
    <span
      onClick={onClick}
      data-tooltip-id="global"
      data-tooltip-content={tooltipText}
      className={`
        min-w-4
        rounded-full
        px-2
        py-1

        ${className ?? ''}
      `}
    >
      {text}
    </span>
  );
}
