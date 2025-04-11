export type InputTypeOf<TSerialize extends BaseSerializer<unknown, unknown>> = Parameters<TSerialize['serialize']>[0];
export type OutputTypeOf<TSerialize extends BaseSerializer<unknown, unknown>> = ReturnType<TSerialize['serialize']>;

export abstract class BaseSerializer<InputType, OutputType> {
  public abstract serialize(item: InputType): OutputType;

  public serializeMany(items: InputType[]): OutputType[] {
    return items.map((i) => this.serialize(i));
  }
}
