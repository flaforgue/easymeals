import { KeyBoardKey, useKeyboardHandler } from '#/hooks/use-keyboard-handler';

export function useKeyupHandler(givenKey: KeyBoardKey, givenHandler: (e: KeyboardEvent) => void) {
  useKeyboardHandler('keyup', givenKey, givenHandler);
}
