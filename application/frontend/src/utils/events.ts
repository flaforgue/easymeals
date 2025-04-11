import { SyntheticEvent } from 'react';

export function stopPropagation<E extends SyntheticEvent>(e: E) {
  e.stopPropagation();
}
