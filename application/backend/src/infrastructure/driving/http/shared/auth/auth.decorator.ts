import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

export const Auth = createParamDecorator((_data: undefined, context: ExecutionContext): AuthUser => {
  const request = context.switchToHttp().getRequest<Request>();

  if (request.user === undefined) {
    throw new UnauthorizedException('Could not find the authenticated user in the request');
  }

  return request.user as AuthUser;
});
