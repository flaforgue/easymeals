import { User } from '#/prisma/client';

export abstract class UserReadRepository {
  public abstract findById(id: string): Promise<User>;

  public abstract findOrNullByIdpId(idpId: string): Promise<User | null>;
}
