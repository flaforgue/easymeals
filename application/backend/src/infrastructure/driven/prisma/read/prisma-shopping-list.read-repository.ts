import { ShoppingList } from '#/core/shopping/shopping-list/entities/shopping-list.entity';
import { ShoppingListReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaShoppingListReadRepository implements ShoppingListReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getPage(
    houseId: string,
    pagination: {
      page: number;
      nbPerPage: number;
      orderBy: 'createdAt'; // @todo type with an attribute of the domain entity
      orderDirection: 'asc' | 'desc';
    },
  ) {
    return this.prisma.shoppingList.findMany({
      select: {
        id: true,
        name: true,
        ingredientSuggestions: {
          select: {
            quantity: true,
            ingredient: {
              select: {
                id: true,
                name: true,
                unit: {
                  select: {
                    abbreviation: true,
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
          orderBy: {
            ingredient: {
              name: 'asc',
            },
          },
        },
        ingredients: {
          select: {
            isChecked: true,
            quantity: true,
            ingredient: {
              select: {
                id: true,
                name: true,
                ingredientCategoryId: true,
                unit: {
                  select: {
                    abbreviation: true,
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
          orderBy: {
            ingredient: {
              name: 'asc',
            },
          },
        },
        products: {
          select: {
            isChecked: true,
            product: {
              select: {
                id: true,
                name: true,
                productCategoryId: true,
              },
            },
            quantity: true,
          },
          orderBy: {
            product: {
              name: 'asc',
            },
          },
        },
      },
      where: {
        houseId: houseId,
      },
      skip: pagination.nbPerPage * (pagination.page - 1),
      take: pagination.nbPerPage,
      orderBy: {
        [pagination.orderBy]: pagination.orderDirection,
      },
    });
  }

  public findById(id: { id: string; houseId: string }) {
    return this.prisma.shoppingList.findUniqueOrThrow({
      select: {
        id: true,
        name: true,
        ingredientSuggestions: {
          select: {
            quantity: true,
            ingredient: {
              select: {
                id: true,
                name: true,
                unit: {
                  select: {
                    abbreviation: true,
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
          orderBy: {
            ingredient: {
              name: 'asc',
            },
          },
        },
        ingredients: {
          select: {
            isChecked: true,
            quantity: true,
            ingredient: {
              select: {
                id: true,
                name: true,
                ingredientCategoryId: true,
                unit: {
                  select: {
                    abbreviation: true,
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
          orderBy: {
            ingredient: {
              name: 'asc',
            },
          },
        },
        products: {
          select: {
            isChecked: true,
            product: {
              select: {
                id: true,
                name: true,
                productCategoryId: true,
              },
            },
            quantity: true,
          },
          orderBy: {
            product: {
              name: 'asc',
            },
          },
        },
      },
      where: {
        id: id.id,
        houseId: id.houseId,
      },
    });
  }

  public async findEntityById(id: { id: string; houseId: string }): Promise<ShoppingList> {
    const prismaShoppingList = await this.prisma.shoppingList.findUniqueOrThrow({
      where: {
        id: id.id,
        houseId: id.houseId,
      },
    });

    return new ShoppingList(prismaShoppingList.id, prismaShoppingList.houseId, prismaShoppingList.name);
  }

  public async exists(id: { id: string; houseId: string }): Promise<boolean> {
    const nbShoppingLists = await this.prisma.shoppingList.count({
      where: {
        id: id.id,
        houseId: id.houseId,
      },
    });

    return nbShoppingLists > 0;
  }
}
