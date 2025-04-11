import { ValidationException } from '#/core/generic/validation/validation.exception';
import { CreateProductCommand } from '#/core/shopping/product/commands/create-product/create-product.command';
import { Product } from '#/core/shopping/product/entities/product.entity';
import { ProductReadRepository } from '#/core/shopping/product/repositories/product.read-repository';
import { ProductWriteRepository } from '#/core/shopping/product/repositories/product.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductHandler {
  public constructor(
    private readonly productReadRepository: ProductReadRepository,
    private readonly productWriteRepository: ProductWriteRepository,
  ) {}

  public async handle(command: CreateProductCommand): Promise<void> {
    const product = new Product(command.id, command.houseId, command.name, command.productCategoryId);
    const doesNameExistsForHouse = await this.productReadRepository.doesNameExistForHouse(
      product.name,
      product.houseId,
    );

    if (doesNameExistsForHouse) {
      throw new ValidationException('Ce produit existe déjà');
    }

    return this.productWriteRepository.create(product);
  }
}
