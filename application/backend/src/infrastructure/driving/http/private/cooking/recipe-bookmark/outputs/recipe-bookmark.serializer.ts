import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { RecipeBookmark } from '#/shared';
import { Injectable } from '@nestjs/common';
import { UserRecipeBookmark as PrismaUserRecipeBookmark } from '#/prisma/client';

@Injectable()
export class RecipeBookmarkSerializer extends BaseSerializer<PrismaUserRecipeBookmark, RecipeBookmark> {
  public serialize(userRecipeBookmark: PrismaUserRecipeBookmark): RecipeBookmark {
    return {
      userId: userRecipeBookmark.userId,
      recipeId: userRecipeBookmark.recipeId,
    };
  }
}
