import { UserHouse, JoinHouseCommand, UpdateUserHouseCommand, House, FindHouseByJoinKeyQuery } from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function findHouseByJoinKey(query: FindHouseByJoinKeyQuery): Promise<House> {
  return fetchPrivateQuery('/user/house/find-by-join-key', query) as Promise<House>;
}

export function findUserHouse(): Promise<UserHouse> {
  return fetchPrivateQuery('/user/house/find') as Promise<UserHouse>;
}

export function updateUserHouse(command: UpdateUserHouseCommand): Promise<void> {
  return fetchPrivateCommand('/user/house/update', command) as Promise<void>;
}

export function joinHouse(command: JoinHouseCommand): Promise<void> {
  return fetchPrivateCommand('/user/house/join', command) as Promise<void>;
}
