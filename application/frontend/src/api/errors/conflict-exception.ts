export class ConflictException extends Error {
  public constructor(public readonly message: string) {
    super('A conflict exception occurred');
  }
}

export function isConflictException(exception: unknown): exception is ConflictException {
  return exception?.constructor.name === ConflictException.name;
}
