import { RecipeBookmarkWriteRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeBookmarkWriteRepository implements RecipeBookmarkWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(id: { userId: string; recipeId: string }): Promise<void> {
    await this.prisma.userRecipeBookmark.create({
      data: {
        userId: id.userId,
        recipeId: id.recipeId,
      },
    });

    return;
  }

  public async delete(id: { userId: string; recipeId: string }): Promise<void> {
    await this.prisma.userRecipeBookmark.delete({
      where: {
        userId_recipeId: {
          userId: id.userId,
          recipeId: id.recipeId,
        },
      },
    });

    return;
  }
}
