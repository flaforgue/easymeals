import { NotFoundException } from '#/core/generic/database/not-found.exception';
import { WriteConflictException } from '#/core/generic/database/write-conflict.exception';
import { Prisma } from '#/prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * @see https://www.prisma.io/docs/orm/reference/error-reference#prisma-client-query-engine
 */
export class PrismaExceptionAdapter {
  public adaptException(exception: PrismaClientKnownRequestError): Error {
    if (exception.code === 'P2025') {
      return new NotFoundException(exception.message);
    }

    if (exception.code === 'P2003') {
      return new NotFoundException(exception.message);
    }

    if (exception.code === 'P2002') {
      return new WriteConflictException('Cet élément existe déjà');
    }

    return exception;
  }

  public supports(exception: unknown): exception is PrismaClientKnownRequestError {
    return (exception as Error) instanceof Prisma.PrismaClientKnownRequestError;
  }
}
