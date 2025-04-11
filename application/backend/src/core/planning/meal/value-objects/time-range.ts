import { ValidationException } from '#/core/generic/validation/validation.exception';

export class DateRange {
  public constructor(
    public readonly start: Date,
    public readonly end: Date,
  ) {
    if (start > end) {
      throw new ValidationException(`Invalid date range from ${this.start.toString()} to ${this.end.toString()}`);
    }
  }
}
