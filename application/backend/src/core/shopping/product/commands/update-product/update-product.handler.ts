import { ValidationException } from '#/core/generic/validation/validation.exception';
import { UpdateProductCommand } from '#/core/shopping/product/commands/update-product/update-product.command';
import { Product } from '#/core/shopping/product/entities/product.entity';
import { ProductReadRepository } from '#/core/shopping/product/repositories/product.read-repository';
import { ProductWriteRepository } from '#/core/shopping/product/repositories/product.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateProductHandler {
  public constructor(
    private readonly productReadRepository: ProductReadRepository,
    private readonly productWriteRepository: ProductWriteRepository,
  ) {}

  public async handle(command: UpdateProductCommand): Promise<void> {
    const product = new Product(command.id, command.houseId, command.name, command.productCategoryId);
    const doesNameExistsForHouse = await this.productReadRepository.doesNameExistForHouse(
      product.name,
      product.houseId,
    );

    if (doesNameExistsForHouse) {
      throw new ValidationException('Un produit porte déjà ce nom');
    }

    return this.productWriteRepository.update(product);
  }
}
