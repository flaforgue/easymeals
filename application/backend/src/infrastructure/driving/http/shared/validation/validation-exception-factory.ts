import { BadRequestException, ValidationError } from '@nestjs/common';
import { ValidationErrorBag } from '#/shared';

export function validationExceptionFactory(validationErrors: ValidationError[]) {
  const errors = validationErrors.reduce<string[]>((acc, validationError) => {
    const constraints = validationError.constraints ?? {};
    const messages = Object.values(constraints);
    if (messages.length === 0) {
      return acc;
    }

    return [...acc, ...messages];
  }, []);

  const validationErrorBag: ValidationErrorBag = {
    errors: errors,
  };

  return new BadRequestException(validationErrorBag);
}
