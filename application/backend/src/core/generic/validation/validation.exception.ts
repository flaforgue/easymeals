import { ValidationErrorBag } from '#/shared';

export class ValidationException extends Error {
  public readonly validationErrorBag: ValidationErrorBag;

  public static is(exception: unknown): exception is ValidationException {
    return ((exception as Error).constructor.name ?? null) === ValidationException.name;
  }

  public constructor(message: string) {
    super('A validation error occurred');

    this.validationErrorBag = {
      errors: [message],
    };
  }
}
