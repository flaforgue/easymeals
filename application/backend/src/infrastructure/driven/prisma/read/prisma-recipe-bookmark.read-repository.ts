import { RecipeBookmarkReadRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { UserRecipeBookmark } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeBookmarkReadRepository implements RecipeBookmarkReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getByUserId(userId: string): Promise<UserRecipeBookmark[]> {
    return this.prisma.userRecipeBookmark.findMany({
      where: {
        userId: userId,
      },
    });
  }
}
