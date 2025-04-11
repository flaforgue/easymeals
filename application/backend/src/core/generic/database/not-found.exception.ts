export class NotFoundException extends Error {
  public static is(exception: unknown): exception is NotFoundException {
    return ((exception as Error).constructor.name ?? null) === NotFoundException.name;
  }
}
