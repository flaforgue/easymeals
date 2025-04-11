import { useEffect } from 'react';

export function useGlobalClickHandler(givenHandler: () => void) {
  useEffect(() => {
    document.addEventListener('click', givenHandler);

    return () => {
      document.removeEventListener('click', givenHandler);
    };
  }, [givenHandler]);
}
