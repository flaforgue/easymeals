import { AuthException } from '#/core/generic/auth/auth.exception';
import { AuthorizationException } from '#/core/generic/authorization/authorization.exception';
import { NotFoundException } from '#/core/generic/database/not-found.exception';
import { WriteConflictException } from '#/core/generic/database/write-conflict.exception';
import { ValidationException } from '#/core/generic/validation/validation.exception';
import { PrismaExceptionAdapter } from '#/infrastructure/driven/prisma/prisma-exception-adapter';
import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ForbiddenException,
  NotFoundException as HttpNotFoundException,
  HttpServer,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  public constructor(
    applicationRef: HttpServer,
    private readonly prismaExceptionAdapter: PrismaExceptionAdapter,
  ) {
    super(applicationRef);
  }

  public catch(caughtException: unknown, host: ArgumentsHost) {
    let exception = caughtException;
    if (this.prismaExceptionAdapter.supports(exception)) {
      exception = this.prismaExceptionAdapter.adaptException(exception);
    }

    if (ValidationException.is(exception)) {
      return super.catch(new BadRequestException(exception.validationErrorBag), host);
    }

    if (AuthException.is(exception)) {
      return super.catch(new UnauthorizedException(exception.message), host);
    }

    if (AuthorizationException.is(exception)) {
      return super.catch(new ForbiddenException(exception.message), host);
    }

    if (NotFoundException.is(exception)) {
      return super.catch(new HttpNotFoundException(exception.message), host);
    }

    if (WriteConflictException.is(exception)) {
      return super.catch(new ConflictException(exception.message), host);
    }

    return super.catch(exception, host);
  }
}
