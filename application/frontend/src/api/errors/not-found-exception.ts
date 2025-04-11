export class NotFoundException extends Error {}

export function isNotFoundException(exception: unknown): exception is NotFoundException {
  return exception?.constructor.name === NotFoundException.name;
}
