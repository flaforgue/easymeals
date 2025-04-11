import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { Product } from '#/shared';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { ProductSerializer } from '#/infrastructure/driving/http/private/shopping/product/outputs/product.serializer';
import { ListProductsDto } from '#/infrastructure/driving/http/private/shopping/product/inputs/list-products.dto';
import { CreateProductDto } from '#/infrastructure/driving/http/private/shopping/product/inputs/create-product.dto';
import { DeleteProductDto } from '#/infrastructure/driving/http/private/shopping/product/inputs/delete-product.dto';
import { UpdateProductDto } from '#/infrastructure/driving/http/private/shopping/product/inputs/update-product.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { ProductReadRepository } from '#/core/shopping/product/repositories/product.read-repository';
import { ProductWriteRepository } from '#/core/shopping/product/repositories/product.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { CreateProductHandler } from '#/core/shopping/product/commands/create-product/create-product.handler';
import { UpdateProductHandler } from '#/core/shopping/product/commands/update-product/update-product.handler';
import { CreateProductCommand } from '#/core/shopping/product/commands/create-product/create-product.command';
import { UpdateProductCommand } from '#/core/shopping/product/commands/update-product/update-product.command';

@Controller('private/shopping/product')
export class ProductController extends PrivateBaseController {
  public constructor(
    private createProductHandler: CreateProductHandler,
    private updateProductHandler: UpdateProductHandler,
    private productReadRepository: ProductReadRepository,
    private productWriteRepository: ProductWriteRepository,
    private productSerializer: ProductSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Auth() authUser: AuthUser, @Query() listProductsDto: ListProductsDto): Promise<Product[]> {
    const products = await this.productReadRepository.getFromFilters({
      ...listProductsDto,
      houseId: authUser.houseId,
    });

    return this.productSerializer.serializeMany(products);
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createProductDto: CreateProductDto): Promise<void> {
    return this.createProductHandler.handle(
      new CreateProductCommand(
        createProductDto.id,
        authUser.houseId,
        createProductDto.name,
        createProductDto.productCategoryId,
      ),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() deleteProductDto: DeleteProductDto): Promise<void> {
    return this.productWriteRepository.delete({
      productId: deleteProductDto.id,
      houseId: authUser.houseId,
    });
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateProductDto: UpdateProductDto): Promise<void> {
    return this.updateProductHandler.handle(
      new UpdateProductCommand(
        updateProductDto.id,
        authUser.houseId,
        updateProductDto.name,
        updateProductDto.productCategoryId,
      ),
    );
  }
}
