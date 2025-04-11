import { isConflictException } from '#/api/errors/conflict-exception';
import { isInvalidFileException } from '#/api/errors/invalid-file-exception';
import { isNotFoundException } from '#/api/errors/not-found-exception';
import { isValidationException } from '#/api/errors/validation-exception';
import { getRandomItem } from '#/utils/array';
import toast from 'react-hot-toast';

export function defaultErrorHandler(err: Error) {
  const message = getErrorMessage(err);

  if (message === null) {
    throw err;
  }

  toast.error(message, { id: 'global' });

  return;
}

function getErrorMessage(err: unknown): string | null {
  const emojis = ['❌', '🙅', '👎', '🙈', '🙉', '🙊', '🚫', '⛔️', '😱', '😬'];
  const randomEmoji = getRandomItem(emojis);

  if (isNotFoundException(err) || isConflictException(err)) {
    return `${randomEmoji} ${err.message}`;
  }

  if (isValidationException(err)) {
    return `${err.validationErrorBag.errors.join('\n ' + getRandomItem(emojis))} ${randomEmoji}`;
  }

  if (isInvalidFileException(err)) {
    return err.message;
  }

  return null;
}

export function logError(e: Error) {
  console.error(e);
}
