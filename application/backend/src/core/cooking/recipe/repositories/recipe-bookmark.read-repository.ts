import { UserRecipeBookmark } from '#/prisma/client';

export abstract class RecipeBookmarkReadRepository {
  public abstract getByUserId(userId: string): Promise<UserRecipeBookmark[]>;
}
