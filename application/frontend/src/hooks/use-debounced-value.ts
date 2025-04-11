import { useEffect, useState } from 'react';

export default function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [timeoutRef, setTimeoutRef] = useState<null | number>(null);

  useEffect(() => {
    if (JSON.stringify(value) === JSON.stringify(debouncedValue)) {
      return;
    }

    if (timeoutRef !== null) {
      clearTimeout(timeoutRef);
    }

    setTimeoutRef(
      setTimeout(() => {
        setDebouncedValue(value);
      }, delay),
    );

    return () => {
      if (timeoutRef !== null) {
        clearTimeout(timeoutRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);

  return debouncedValue;
}
