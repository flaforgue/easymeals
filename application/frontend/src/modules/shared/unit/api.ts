import { Unit } from '#/shared';
import { fetchPublicQuery } from '#/api/clients/public-client';

export function listUnits(): Promise<Unit[]> {
  return fetchPublicQuery('/shared/unit/list') as Promise<Unit[]>;
}
