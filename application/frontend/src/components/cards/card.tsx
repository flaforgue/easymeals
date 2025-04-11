interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`
        max-w-full
        rounded
        shadow-md

        ${className ?? 'bg-white'}
      `}
    >
      {children}
    </div>
  );
}
