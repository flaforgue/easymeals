import IconWarning from '#/components/icons/icon-warning';
import { ReactNode } from 'react';

interface WarningBannerProps {
  children: ReactNode;
  className?: string;
}

export default function WarningBanner({ children, className }: WarningBannerProps) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-3
        rounded
        bg-amber-100
        px-4
        py-2

        tablet:flex-row

        ${className}
      `}
    >
      <span
        className={`
          h-7
          min-h-7
          w-7
          min-w-7
          rounded-full
          text-amber-500
        `}
      >
        <IconWarning />
      </span>
      <p
        className={`
          leading-snug
          text-amber-600
        `}
      >
        {children}
      </p>
    </div>
  );
}
