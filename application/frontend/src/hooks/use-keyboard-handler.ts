import { useEffect } from 'react';

type EventName = 'keydown' | 'keypress' | 'keyup';

export type KeyBoardKey = 'Escape' | 'Enter' | 'ArrowUp' | 'ArrowDown';

export function useKeyboardHandler(
  eventName: EventName,
  givenKey: KeyBoardKey,
  givenHandler: (e: KeyboardEvent) => void,
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === givenKey) {
        givenHandler(e);
      }
    };
    document.addEventListener(eventName, handler);

    return () => document.removeEventListener(eventName, handler);
  }, [eventName, givenHandler, givenKey]);
}
