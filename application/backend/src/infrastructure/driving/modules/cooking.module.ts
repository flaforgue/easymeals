import { RecipeBookmarkSerializer } from '#/infrastructure/driving/http/private/cooking/recipe-bookmark/outputs/recipe-bookmark.serializer';
import { RecipeBookmarkController } from '#/infrastructure/driving/http/private/cooking/recipe-bookmark/recipe-bookmark.controller';
import { RecipeIngredientController as PrivateRecipeIngredientController } from '#/infrastructure/driving/http/private/cooking/recipe-ingredient/recipe-ingredient.controller';
import { RecipeInstructionController as PrivateRecipeInstructionController } from '#/infrastructure/driving/http/private/cooking/recipe-instruction/recipe-instruction.controller';
import { RecipeInstructionController as PublicRecipeInstructionController } from '#/infrastructure/driving/http/public/cooking/recipe-instruction/recipe-instruction.controller';
import { RecipeController as PrivateRecipeController } from '#/infrastructure/driving/http/private/cooking/recipe/recipe.controller';
import { CuisineTypeController } from '#/infrastructure/driving/http/public/cooking/cuisine-type/cuisine-type.controller';
import { CuisineTypeSerializer } from '#/infrastructure/driving/http/public/cooking/cuisine-type/outputs/cuisine-type.serializer';
import { RecipeIngredientSerializer } from '#/infrastructure/driving/http/public/cooking/recipe-ingredient/outputs/recipe-ingredient.serializer';
import { RecipeIngredientController as PublicRecipeIngredientController } from '#/infrastructure/driving/http/public/cooking/recipe-ingredient/recipe-ingredient.controller';
import { RecipeInstructionSerializer } from '#/infrastructure/driving/http/public/cooking/recipe-instruction/outputs/recipe-instruction.serializer';
import { RecipeSerializer } from '#/infrastructure/driving/http/public/cooking/recipe/outputs/recipe.serializer';
import { RecipeController as PublicRecipeController } from '#/infrastructure/driving/http/public/cooking/recipe/recipe.controller';
import { Module } from '@nestjs/common';
import { CuisineTypeReadRepository } from '#/core/cooking/cuisine-type/repositories/cuisine-type.read-repository';
import { PrismaCuisineTypeReadRepository } from '#/infrastructure/driven/prisma/read/prisma-cuisine-type.read-repository';
import { RecipeBookmarkReadRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.read-repository';
import { RecipeBookmarkWriteRepository } from '#/core/cooking/recipe/repositories/recipe-bookmark.write-repository';
import { RecipeIngredientReadRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.read-repository';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { PrismaRecipeBookmarkReadRepository } from '#/infrastructure/driven/prisma/read/prisma-recipe-bookmark.read-repository';
import { PrismaRecipeIngredientReadRepository } from '#/infrastructure/driven/prisma/read/prisma-recipe-ingredient.read-repository';
import { PrismaRecipeInstructionReadRepository } from '#/infrastructure/driven/prisma/read/prisma-recipe-instruction.read-repository';
import { PrismaRecipeReadRepository } from '#/infrastructure/driven/prisma/read/prisma-recipe.read-repository';
import { PrismaRecipeBookmarkWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-recipe-bookmark.write-repository';
import { PrismaRecipeIngredientWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-recipe-ingredient.write-repository';
import { PrismaRecipeInstructionWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-recipe-instruction.write-repository';
import { PrismaRecipeWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-recipe.write-repository';
import { PrismaModule } from '#/infrastructure/driving/modules/prisma.module';
import { CreateRecipeHandler } from '#/core/cooking/recipe/commands/create-recipe/create-recipe.handler';
import { UpdateRecipeHandler } from '#/core/cooking/recipe/commands/update-recipe/update-recipe.handler';
import { AddIngredientToRecipeHandler } from '#/core/cooking/recipe/commands/add-ingredient-to-recipe/add-ingredient-to-recipe.handler';
import { UpdateIngredientQuantityHandler } from '#/core/cooking/recipe/commands/update-ingredient-quantity/update-ingredient-quantity.handler';
import { CreateRecipeInstructionHandler } from '#/core/cooking/recipe/commands/create-recipe-instruction/create-recipe-instruction.handler';
import { UpdateRecipeInstructionHandler } from '#/core/cooking/recipe/commands/update-recipe-instruction/update-recipe-instruction.handler';
import { ImportRecipeHandler } from '#/core/cooking/recipe/commands/import-recipe/import-recipe.handler';
import { SharedModule } from '#/infrastructure/driving/modules/shared.module';
import { UserModule } from '#/infrastructure/driving/modules/user.module';
import { UpdateNbPortionsHandler } from '#/core/cooking/recipe/commands/update-nb-portions/update-nb-portions.handler';
import { UploadModule } from '#/infrastructure/driving/modules/upload.module';

@Module({
  imports: [UserModule, PrismaModule, SharedModule, UploadModule],
  exports: [],
  controllers: [
    PublicRecipeController,
    PrivateRecipeController,
    PublicRecipeIngredientController,
    PrivateRecipeIngredientController,
    RecipeBookmarkController,
    PrivateRecipeInstructionController,
    CuisineTypeController,
    PublicRecipeInstructionController,
  ],
  providers: [
    CreateRecipeHandler,
    UpdateRecipeHandler,
    AddIngredientToRecipeHandler,
    UpdateIngredientQuantityHandler,
    CreateRecipeInstructionHandler,
    UpdateRecipeInstructionHandler,
    ImportRecipeHandler,
    UpdateNbPortionsHandler,
    RecipeBookmarkSerializer,
    RecipeIngredientSerializer,
    CuisineTypeSerializer,
    RecipeSerializer,
    RecipeInstructionSerializer,
    {
      provide: CuisineTypeReadRepository,
      useClass: PrismaCuisineTypeReadRepository,
    },
    {
      provide: RecipeBookmarkReadRepository,
      useClass: PrismaRecipeBookmarkReadRepository,
    },
    {
      provide: RecipeBookmarkWriteRepository,
      useClass: PrismaRecipeBookmarkWriteRepository,
    },
    {
      provide: RecipeIngredientReadRepository,
      useClass: PrismaRecipeIngredientReadRepository,
    },
    {
      provide: RecipeIngredientWriteRepository,
      useClass: PrismaRecipeIngredientWriteRepository,
    },
    {
      provide: RecipeInstructionReadRepository,
      useClass: PrismaRecipeInstructionReadRepository,
    },
    {
      provide: RecipeInstructionWriteRepository,
      useClass: PrismaRecipeInstructionWriteRepository,
    },
    {
      provide: RecipeReadRepository,
      useClass: PrismaRecipeReadRepository,
    },
    {
      provide: RecipeWriteRepository,
      useClass: PrismaRecipeWriteRepository,
    },
  ],
})
export class CookingModule {}
