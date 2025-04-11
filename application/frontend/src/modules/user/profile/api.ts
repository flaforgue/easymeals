import { UpdateProfileCommand, Profile } from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function findProfile(): Promise<Profile> {
  return fetchPrivateQuery('/user/profile/find') as Promise<Profile>;
}

export function updateProfile(command: UpdateProfileCommand): Promise<void> {
  return fetchPrivateCommand('/user/profile/update', command) as Promise<void>;
}
