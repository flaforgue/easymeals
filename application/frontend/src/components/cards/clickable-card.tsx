interface CardProps {
  children: JSX.Element | JSX.Element[];
  handleClick?: () => void;
  className?: string;
}

export default function ClickableCard({ children, handleClick, className }: CardProps) {
  return (
    <div
      onClick={handleClick}
      className={`
        max-w-full
        rounded
        bg-white
        shadow-md
        transition-all
        duration-75
        ease-in

        hover:cursor-pointer
        hover:shadow-lg

        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
}
