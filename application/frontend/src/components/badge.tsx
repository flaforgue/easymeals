import { ReactNode } from 'react';

interface TooptipProps {
  'data-tooltip-id'?: string;
  'data-tooltip-content'?: string;
}

interface BadgeProps {
  tooltipText?: string;
  children: ReactNode;
}
export default function Badge({ tooltipText, children }: BadgeProps) {
  const props: TooptipProps = {};

  if (tooltipText !== undefined) {
    props['data-tooltip-id'] = 'global';
    props['data-tooltip-content'] = tooltipText;
  }

  return (
    <div
      {...props}
      className={`
        h-full
        w-full
        overflow-visible
        rounded-full
        bg-white
        shadow
      `}
    >
      {children}
    </div>
  );
}
