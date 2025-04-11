import { CuisineType } from '#/shared';
import { fetchPublicQuery } from '#/api/clients/public-client';

export function listCuisineTypes(): Promise<CuisineType[]> {
  return fetchPublicQuery('/cooking/cuisine-type/list') as Promise<CuisineType[]>;
}
