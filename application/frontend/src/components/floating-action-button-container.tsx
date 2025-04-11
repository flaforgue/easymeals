import { ReactNode } from 'react';

interface FloatingActionButtonContainerProps {
  children: ReactNode;
}
export default function FloatingActionButtonContainer({ children }: FloatingActionButtonContainerProps) {
  return (
    <div
      className={`
        screen:fixed
        screen:bottom-20
        screen:right-2
        screen:z-10
        screen:tablet:bottom-3
        screen:tablet:right-6
      `}
    >
      {children}
    </div>
  );
}
