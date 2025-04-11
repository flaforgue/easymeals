import { useEffect, useState } from 'react';

export default function useAutoSavedState<T>(initialValue: T, autoSaveCallback: () => void): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(autoSaveCallback, [value]);

  return [value, setValue];
}
