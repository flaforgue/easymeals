import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Prisma, Recipe as PrismaRecipe } from '#/prisma/client';
import { FAST_RECIPE_MAX_TOTAL_TIME } from '#/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeReadRepository implements RecipeReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public findById(recipeId: string): Promise<PrismaRecipe> {
    return this.prisma.recipe.findUniqueOrThrow({
      where: {
        id: recipeId,
      },
    });
  }

  public async findEntityById(id: { id: string; houseId: string }): Promise<Recipe> {
    const prismaRecipe = await this.prisma.recipe.findUniqueOrThrow({
      where: {
        id: id.id,
        houseId: id.houseId,
      },
    });

    return new Recipe(
      prismaRecipe.id,
      id.houseId,
      prismaRecipe.name,
      prismaRecipe.nbPortions,
      prismaRecipe.preparationTimeInMinutes,
      prismaRecipe.totalTimeInMinutes,
      prismaRecipe.cuisineTypeId,
      prismaRecipe.isVegetarian,
      prismaRecipe.illustrationUrl,
    );
  }

  public getPublicFromFilters(filters: {
    search: string;
    isVegetarian: boolean;
    isFast: boolean;
    cuisineTypeId: string | null;
  }): Promise<PrismaRecipe[]> {
    const filterWheres: Prisma.RecipeWhereInput = {};

    if (filters.search !== '') {
      filterWheres.name = {
        contains: filters.search,
        mode: 'insensitive',
      };
    }

    if (filters.cuisineTypeId !== null) {
      filterWheres.cuisineTypeId = filters.cuisineTypeId;
    }

    if (filters.isVegetarian) {
      filterWheres.isVegetarian = true;
    }

    if (filters.isFast) {
      filterWheres.totalTimeInMinutes = {
        lte: FAST_RECIPE_MAX_TOTAL_TIME,
      };
    }

    return this.prisma.recipe.findMany({
      where: {
        ...filterWheres,
        houseId: null,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  public getFromFilters(
    userId: string,
    houseId: string,
    filters: {
      search: string;
      isVegetarian: boolean;
      isFast: boolean;
      cuisineTypeId: string | null;
      isBookmark: boolean;
      isUserContent: boolean;
    },
  ): Promise<PrismaRecipe[]> {
    const filterWheres: Prisma.RecipeWhereInput = {};

    if (filters.search !== '') {
      filterWheres.name = {
        contains: filters.search,
        mode: 'insensitive',
      };
    }

    if (filters.cuisineTypeId !== null) {
      filterWheres.cuisineTypeId = filters.cuisineTypeId;
    }

    if (filters.isVegetarian) {
      filterWheres.isVegetarian = true;
    }

    if (filters.isFast) {
      filterWheres.totalTimeInMinutes = {
        lte: FAST_RECIPE_MAX_TOTAL_TIME,
      };
    }

    if (filters.isUserContent) {
      filterWheres.houseId = houseId;
    }

    if (filters.isBookmark) {
      filterWheres.userRecipeBookmarks = {
        some: {
          userId: userId,
        },
      };
    }

    return this.prisma.recipe.findMany({
      where: {
        ...filterWheres,
        OR: [{ houseId: null }, { houseId: houseId }],
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
