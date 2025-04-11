export class UnknownException extends Error {
  public constructor(public readonly message: string) {
    super('An unknown exception occurred');
  }
}

export function isUnknownException(exception: unknown): exception is UnknownException {
  return exception?.constructor.name === UnknownException.name;
}
