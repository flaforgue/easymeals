import { UseMutationResult } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseCustomMutationResult<MutationFn extends (...args: any) => any> = UseMutationResult<
  Awaited<ReturnType<MutationFn>>,
  Error,
  Parameters<MutationFn>[0],
  unknown
>;
