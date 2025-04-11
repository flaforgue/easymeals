export class AuthorizationException extends Error {
  public static is(exception: unknown): exception is AuthorizationException {
    return ((exception as Error).constructor.name ?? null) === AuthorizationException.name;
  }
}
