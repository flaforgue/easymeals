import { useState, useEffect, MutableRefObject } from 'react';

export default function useHasBeenScrolledOut(elementRef: MutableRefObject<HTMLElement | null>) {
  const [hasBeenScrolledOut, setHasBeenScrolledOut] = useState(false);
  useEffect(() => {
    const updateHasBeenScrolledOut = () => {
      if (elementRef.current === null) {
        return;
      }

      if (elementRef.current.getBoundingClientRect().y < 0) {
        setHasBeenScrolledOut(true);
      } else {
        setHasBeenScrolledOut(false);
      }
    };

    window.addEventListener('scroll', updateHasBeenScrolledOut);

    return () => {
      window.removeEventListener('scroll', updateHasBeenScrolledOut);
    };
  }, [elementRef]);

  return hasBeenScrolledOut;
}
