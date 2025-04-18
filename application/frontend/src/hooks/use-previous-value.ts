import { useRef, useEffect } from 'react';

export function usePreviousValue<T>(value: T): T {
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
