import IconInfo from '#/components/icons/icon-info';
import { ReactNode } from 'react';

interface InfoBannerProps {
  children: ReactNode;
  className?: string;
}

export default function InfoBanner({ children, className }: InfoBannerProps) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-3
        rounded

        tablet:flex-row

        ${className ?? 'bg-white'}
      `}
    >
      <span
        className={`
          h-7
          min-h-7
          w-7
          min-w-7
          rounded-full
          text-sky-500
        `}
      >
        <IconInfo />
      </span>
      <p className="text-sky-600">{children}</p>
    </div>
  );
}
