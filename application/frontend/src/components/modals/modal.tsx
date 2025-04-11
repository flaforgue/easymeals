import { useEffect, useRef, useState } from 'react';
import IconClose from '#/components/icons/icon-close';
import { useGlobalClickHandler } from '#/hooks/use-global-click-handler';
import { useKeyupHandler } from '#/hooks/use-keyup-handler';
import { stopPropagation } from '#/utils/events';

type ModalSize = 'small' | 'medium' | 'large' | 'largest';

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
  size: ModalSize;
  onCancel: () => unknown;
}

const sizeClassNames: Record<ModalSize, string> = {
  small: 'max-w-lg',
  medium: 'max-w-2xl',
  large: 'max-w-3xl',
  largest: 'max-w-6xl',
};

export default function Modal({ isOpen, children, size, onCancel }: ModalProps) {
  const transitionDuration = 100;
  const sizeClassName = sizeClassNames[size];
  const [displayStyle, setDisplayStyle] = useState<'flex' | 'hidden'>('hidden');
  const [isVisible, setIsVisible] = useState(false);

  useKeyupHandler('Escape', onCancel);
  useGlobalClickHandler(onCancel);
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  const open = () => {
    setDisplayStyle('flex');
    setTimeout(() => setIsVisible(true), transitionDuration);
  };

  const closeTimeout = useRef<undefined | number>();
  const close = () => {
    clearTimeout(closeTimeout.current);
    setIsVisible(false);
    closeTimeout.current = setTimeout(() => setDisplayStyle('hidden'), transitionDuration);

    return () => clearTimeout(closeTimeout.current);
  };

  useEffect(() => {
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen]);

  return (
    <div
      onClick={onCancel}
      tabIndex={-1}
      className={`
        ${isVisible ? 'opacity-100' : 'opacity-O'}

        transition-opacity
        duration-100
        ease-in

        ${displayStyle}

        fixed
        left-0
        top-0
        z-40
        h-[calc(100vh-60px)]
        max-h-full
        w-screen
        items-center
        justify-center
        overflow-y-auto
        overflow-x-hidden
        bg-slate-900
        bg-opacity-50

        tablet:h-screen
      `}
    >
      <div
        className={`
          relative
          max-h-full
          w-full
          p-4

          ${sizeClassName}
        `}
        onClick={stopPropagation}
      >
        <div
          className={`
            relative
            rounded-lg
            bg-white
            shadow
          `}
        >
          <button
            onClick={onCancel}
            type="button"
            className={`
              absolute
              end-2.5
              top-3
              ms-auto
              inline-flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-transparent
              text-sm
              text-slate-400
              transition-all

              hover:bg-slate-100
              hover:text-slate-700
            `}
          >
            <IconClose />
          </button>

          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
