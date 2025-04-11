interface DropdownOptionChildProps {
  label: string;
  illustrationUrl?: string;
  isActive?: boolean;
  className?: string;
}
export default function DropdownOptionChild({
  label,
  illustrationUrl,
  isActive = false,
  className = '',
}: DropdownOptionChildProps) {
  return (
    <div
      className={`
        inline-flex
        items-center

        ${
          isActive
            ? `
              font-black
              text-black
            `
            : ''
        }
        ${className}
      `}
    >
      {illustrationUrl !== undefined && (
        <img
          className="mr-2"
          height="18"
          width="18"
          src={illustrationUrl}
        />
      )}
      {label}
    </div>
  );
}
