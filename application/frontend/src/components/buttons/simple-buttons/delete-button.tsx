interface DeleteButtonProps {
  children: string | JSX.Element;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export default function DeleteButton({ children, onClick, className }: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        rounded-lg
        bg-rose-500
        px-5
        py-2.5
        text-center
        text-sm
        font-medium
        text-white
        shadow
        shadow-rose-900/50
        transition-all
        duration-75
        ease-in

        hover:bg-rose-700

        ${className ?? ''}
      `}
    >
      {children}
    </button>
  );
}
