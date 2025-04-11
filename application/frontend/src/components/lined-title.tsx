import { ReactNode } from 'react';

interface LinedTitleProps {
  title?: string;
  children?: ReactNode;
  borderclassName?: string;
  className?: string;
}
export default function LinedTitle({ title, children, borderclassName, className }: LinedTitleProps) {
  return (
    <div
      className={`
        ${className ?? ''}

        flex
        items-center
        gap-3
      `}
    >
      <div
        className={`
          ${borderclassName ?? ''}

          flex-1
          rounded
          border
        `}
      />
      {title ?? children}
      <div
        className={`
          ${borderclassName ?? ''}

          flex-1
          rounded
          border
        `}
      />
    </div>
  );
}
