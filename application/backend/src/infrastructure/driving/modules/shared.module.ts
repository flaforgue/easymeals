import { CreateIngredientHandler } from '#/core/shared/ingredient/commands/create-ingredient/create-ingredient.handler';
import { UpdateIngredientHandler } from '#/core/shared/ingredient/commands/update-ingredient/update-ingredient.handler';
import { IngredientCategoryReadRepository } from '#/core/shared/ingredient/repositories/ingredient-category.read-repository';
import { IngredientReadRepository } from '#/core/shared/ingredient/repositories/ingredient.read-repository';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { UnitReadRepository } from '#/core/shared/units/repositories/unit.read-repository';
import { IngredientController } from '#/infrastructure/driving/http/private/shared/ingredient/ingredient.controller';
import { IngredientSerializer } from '#/infrastructure/driving/http/private/shared/ingredient/outputs/ingredient.serializer';
import { UploadSignedUrlController } from '#/infrastructure/driving/http/private/shared/upload/upload-signed-url.controller';
import { IngredientCategoryController } from '#/infrastructure/driving/http/public/shared/ingredient-category/ingredient-category.controller';
import { IngredientCategorySerializer } from '#/infrastructure/driving/http/public/shared/ingredient-category/outputs/ingredient-category.serializer';
import { UnitSerializer } from '#/infrastructure/driving/http/public/shared/unit/outputs/unit.serializer';
import { UnitController } from '#/infrastructure/driving/http/public/shared/unit/unit.controller';
import { UploadModule } from '#/infrastructure/driving/modules/upload.module';
import { PrismaModule } from '#/infrastructure/driving/modules/prisma.module';
import { PrismaIngredientCategoryReadRepository } from '#/infrastructure/driven/prisma/read/prisma-ingredient-category.read-repository';
import { PrismaIngredientReadRepository } from '#/infrastructure/driven/prisma/read/prisma-ingredient.read-repository';
import { PrismaUnitReadRepository } from '#/infrastructure/driven/prisma/read/prisma-unit.read-repository';
import { PrismaIngredientWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-ingredient.write-repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, UploadModule],
  exports: [IngredientReadRepository, IngredientWriteRepository],
  controllers: [IngredientController, IngredientCategoryController, UnitController, UploadSignedUrlController],
  providers: [
    CreateIngredientHandler,
    UpdateIngredientHandler,
    {
      provide: IngredientReadRepository,
      useClass: PrismaIngredientReadRepository,
    },
    {
      provide: IngredientWriteRepository,
      useClass: PrismaIngredientWriteRepository,
    },
    {
      provide: IngredientCategoryReadRepository,
      useClass: PrismaIngredientCategoryReadRepository,
    },
    {
      provide: UnitReadRepository,
      useClass: PrismaUnitReadRepository,
    },
    IngredientSerializer,
    IngredientCategorySerializer,
    UnitSerializer,
  ],
})
export class SharedModule {}
