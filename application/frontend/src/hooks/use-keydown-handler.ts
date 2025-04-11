import { KeyBoardKey, useKeyboardHandler } from '#/hooks/use-keyboard-handler';

export function useKeydownHandler(givenKey: KeyBoardKey, givenHandler: (e: KeyboardEvent) => void) {
  useKeyboardHandler('keydown', givenKey, givenHandler);
}
