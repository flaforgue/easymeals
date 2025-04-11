export class WriteConflictException extends Error {
  public static is(exception: unknown): exception is WriteConflictException {
    return ((exception as Error).constructor.name ?? null) === WriteConflictException.name;
  }
}
