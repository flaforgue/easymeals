import { ConflictException } from '#/api/errors/conflict-exception';
import { NotFoundException } from '#/api/errors/not-found-exception';
import { UnknownException } from '#/api/errors/unknown-exception';
import { ValidationException } from '#/api/errors/validation-exception';
import { ValidationErrorBag } from '#/shared';

export async function adaptClientResponse(res: Response) {
  if (res.status === 204) {
    return;
  }

  const body = (await res.json()) as unknown;

  if (res.status === 400) {
    throw new ValidationException(body as ValidationErrorBag);
  }

  if (res.status === 404) {
    throw new NotFoundException((body as { message: string }).message);
  }

  if (res.status === 409) {
    throw new ConflictException((body as { message: string }).message);
  }

  if (res.status === 500) {
    throw new UnknownException((body as { message: string }).message);
  }

  return body;
}
