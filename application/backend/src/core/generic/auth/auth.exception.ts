export class AuthException extends Error {
  public static is(exception: unknown): exception is AuthException {
    return ((exception as Error).constructor.name ?? null) === AuthException.name;
  }
}
