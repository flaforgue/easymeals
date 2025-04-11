import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useDebouncedCallback<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const [timeoutRef, setTimeoutRef] = useState<null | number>(null);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef !== null) {
      clearTimeout(timeoutRef);
    }

    setTimeoutRef(
      setTimeout(() => {
        callback(...args);
      }, delay),
    );
  };

  useEffect(() => {
    return () => {
      if (timeoutRef !== null) {
        clearTimeout(timeoutRef);
      }
    };
  });

  return debouncedCallback;
}
