import { ProductCategoryReadRepository } from '#/core/shopping/product-category/repositories/product-category.read-repository';
import { CreateProductHandler } from '#/core/shopping/product/commands/create-product/create-product.handler';
import { UpdateProductHandler } from '#/core/shopping/product/commands/update-product/update-product.handler';
import { ProductReadRepository } from '#/core/shopping/product/repositories/product.read-repository';
import { ProductWriteRepository } from '#/core/shopping/product/repositories/product.write-repository';
import { AddIngredientToShoppingListHandler } from '#/core/shopping/shopping-list/commands/add-ingredient-to-shopping-list/add-ingredient-to-shopping-list.handler';
import { AddMealsToShoppingListCommandHandler } from '#/core/shopping/shopping-list/commands/add-meals-to-shopping-list/add-meals-to-shopping-list.handler';
import { AddProductToShoppingListHandler } from '#/core/shopping/shopping-list/commands/add-product-to-shopping-list/add-product-to-shopping-list.handler';
import { CreateShoppingListHandler } from '#/core/shopping/shopping-list/commands/create-shopping-list/create-shopping-list.handler';
import { UpdateIngredientQuantityHandler } from '#/core/shopping/shopping-list/commands/update-ingredient-quantity/update-ingredient-quantity.handler';
import { UpdateProductQuantityHandler } from '#/core/shopping/shopping-list/commands/update-product-quantity/update-product-quantity.handler';
import { RenameShoppingListHandler } from '#/core/shopping/shopping-list/commands/rename-shopping-list/rename-shopping-list.handler';
import { ShoppingListIngredientSuggestionWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.write-repository';
import { ShoppingListIngredientReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.read-repository';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { ShoppingListProductReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.read-repository';
import { ShoppingListProductWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.write-repository';
import { ShoppingListReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.read-repository';
import { ShoppingListWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.write-repository';
import { ProductSerializer } from '#/infrastructure/driving/http/private/shopping/product/outputs/product.serializer';
import { ProductController } from '#/infrastructure/driving/http/private/shopping/product/product.controller';
import { ShoppingListIngredientSuggestionController } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient-suggestion/shopping-list-ingredient-suggestion.controller';
import { ShoppingListIngredientController } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient/shopping-list-ingredient.controller';
import { ShoppingListProductController } from '#/infrastructure/driving/http/private/shopping/shopping-list-product/shopping-list-product.controller';
import { ShoppingListSerializer } from '#/infrastructure/driving/http/private/shopping/shopping-list/outputs/shopping-list.serializer';
import { ShoppingListController } from '#/infrastructure/driving/http/private/shopping/shopping-list/shopping-list.controller';
import { ProductCategorySerializer } from '#/infrastructure/driving/http/public/shopping/product-category/outputs/product-category.serializer';
import { ProductCategoryController } from '#/infrastructure/driving/http/public/shopping/product-category/product-category.controller';
import { PlanningModule } from '#/infrastructure/driving/modules/planning.module';
import { PrismaModule } from '#/infrastructure/driving/modules/prisma.module';
import { PrismaProductCategoryReadRepository } from '#/infrastructure/driven/prisma/read/prisma-product-category.read-repository';
import { PrismaProductReadRepository } from '#/infrastructure/driven/prisma/read/prisma-product.read-repository';
import { PrismaShoppingListIngredientReadRepository } from '#/infrastructure/driven/prisma/read/prisma-shopping-list-ingredient.read-repository';
import { PrismaShoppingListProductReadRepository } from '#/infrastructure/driven/prisma/read/prisma-shopping-list-product.read-repository';
import { PrismaShoppingListReadRepository } from '#/infrastructure/driven/prisma/read/prisma-shopping-list.read-repository';
import { PrismaProductWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-product.write-repository';
import { PrismaShoppingListIngredientSuggestionWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-shopping-list-ingredient-suggestion.write-repository';
import { PrismaShoppingListIngredientWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-shopping-list-ingredient.write-repository';
import { PrismaShoppingListProductWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-shopping-list-product.write-repository';
import { PrismaShoppingListWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-shopping-list.write-repository';
import { Module } from '@nestjs/common';
import { AcceptIngredientSuggestionHandler } from '#/core/shopping/shopping-list/commands/accept-ingredient-suggestion/accept-ingredient-suggestion.handler';
import { ShoppingListIngredientSuggestionReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.read-repository';
import { PrismaShoppingListIngredientSuggestionReadRepository } from '#/infrastructure/driven/prisma/read/prisma-shopping-list-ingredient-suggestion.read-repository';

@Module({
  imports: [PrismaModule, PlanningModule],
  exports: [],
  controllers: [
    ProductController,
    ProductCategoryController,
    ShoppingListController,
    ShoppingListIngredientController,
    ShoppingListIngredientSuggestionController,
    ShoppingListProductController,
  ],
  providers: [
    AddMealsToShoppingListCommandHandler,
    CreateProductHandler,
    UpdateProductHandler,
    CreateShoppingListHandler,
    RenameShoppingListHandler,
    AcceptIngredientSuggestionHandler,
    AddIngredientToShoppingListHandler,
    UpdateIngredientQuantityHandler,
    AddProductToShoppingListHandler,
    UpdateProductQuantityHandler,
    {
      provide: ProductReadRepository,
      useClass: PrismaProductReadRepository,
    },
    {
      provide: ProductWriteRepository,
      useClass: PrismaProductWriteRepository,
    },
    {
      provide: ProductCategoryReadRepository,
      useClass: PrismaProductCategoryReadRepository,
    },
    {
      provide: ShoppingListIngredientSuggestionReadRepository,
      useClass: PrismaShoppingListIngredientSuggestionReadRepository,
    },
    {
      provide: ShoppingListIngredientSuggestionWriteRepository,
      useClass: PrismaShoppingListIngredientSuggestionWriteRepository,
    },
    {
      provide: ShoppingListIngredientReadRepository,
      useClass: PrismaShoppingListIngredientReadRepository,
    },
    {
      provide: ShoppingListIngredientWriteRepository,
      useClass: PrismaShoppingListIngredientWriteRepository,
    },
    {
      provide: ShoppingListProductReadRepository,
      useClass: PrismaShoppingListProductReadRepository,
    },
    {
      provide: ShoppingListProductWriteRepository,
      useClass: PrismaShoppingListProductWriteRepository,
    },
    {
      provide: ShoppingListReadRepository,
      useClass: PrismaShoppingListReadRepository,
    },
    {
      provide: ShoppingListWriteRepository,
      useClass: PrismaShoppingListWriteRepository,
    },
    ProductSerializer,
    ProductCategorySerializer,
    ShoppingListSerializer,
  ],
})
export class ShoppingModule {}
