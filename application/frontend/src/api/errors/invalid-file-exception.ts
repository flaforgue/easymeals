export class InvalidFileException extends Error {}

export function isInvalidFileException(exception: unknown): exception is InvalidFileException {
  return exception?.constructor.name === InvalidFileException.name;
}
