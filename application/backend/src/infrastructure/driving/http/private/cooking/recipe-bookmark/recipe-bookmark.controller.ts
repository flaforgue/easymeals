import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';

import { RecipeBookmark } from '#/shared';
import { CreateRecipeBookmarkDto } from '#/infrastructure/driving/http/private/cooking/recipe-bookmark/inputs/create-recipe-bookmark.dto';
import { DeleteRecipeBookmarkDto } from '#/infrastructure/driving/http/private/cooking/recipe-bookmark/inputs/delete-recipe-bookmark.dto';
import { RecipeBookmarkSerializer } from '#/infrastructure/driving/http/private/cooking/recipe-bookmark/outputs/recipe-bookmark.serializer';
import { RecipeBookmarkReadRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.read-repository';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { RecipeBookmarkWriteRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';

@Controller('private/cooking/recipe-bookmark')
export class RecipeBookmarkController extends PrivateBaseController {
  public constructor(
    private recipeBookmarkReadRepository: RecipeBookmarkReadRepository,
    private recipeBookmarkWriteRepository: RecipeBookmarkWriteRepository,
    private recipeBookmarkSerializer: RecipeBookmarkSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Auth() authUser: AuthUser): Promise<RecipeBookmark[]> {
    const recipeBookmarks = await this.recipeBookmarkReadRepository.getByUserId(authUser.id);

    return this.recipeBookmarkSerializer.serializeMany(recipeBookmarks);
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createRecipeBookmarkDto: CreateRecipeBookmarkDto): Promise<void> {
    return this.recipeBookmarkWriteRepository.create({
      userId: authUser.id,
      recipeId: createRecipeBookmarkDto.id,
    });
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() deleteRecipeBookmarkDto: DeleteRecipeBookmarkDto): Promise<void> {
    return this.recipeBookmarkWriteRepository.delete({
      userId: authUser.id,
      recipeId: deleteRecipeBookmarkDto.id,
    });
  }
}
