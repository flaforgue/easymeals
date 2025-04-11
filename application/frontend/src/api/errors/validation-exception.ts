import { ValidationErrorBag } from '#/shared';

export class ValidationException extends Error {
  public constructor(public readonly validationErrorBag: ValidationErrorBag) {
    super('A validation exception occurred');
  }
}

export function isValidationException(exception: unknown): exception is ValidationException {
  return exception?.constructor.name === ValidationException.name;
}
