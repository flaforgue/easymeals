import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { RecipeInstruction as PrismaRecipeInstruction } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeInstructionReadRepository implements RecipeInstructionReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public findById(id: { instructionId: string; houseId: string }): Promise<PrismaRecipeInstruction> {
    return this.prisma.recipeInstruction.findUniqueOrThrow({
      where: {
        id: id.instructionId,
        recipe: {
          houseId: id.houseId,
        },
      },
    });
  }

  public getByRecipeId(recipeId: string): Promise<PrismaRecipeInstruction[]> {
    return this.prisma.recipeInstruction.findMany({
      where: {
        recipe: {
          id: recipeId,
        },
      },
      orderBy: {
        order: 'asc',
      },
    });
  }

  public countByRecipeId(recipeId: string): Promise<number> {
    return this.prisma.recipeInstruction.count({
      where: {
        recipeId: recipeId,
      },
    });
  }

  public async findEntityById(id: { id: string; houseId: string }): Promise<RecipeInstruction> {
    const prismaRecipeInstruction = await this.prisma.recipeInstruction.findUniqueOrThrow({
      where: {
        id: id.id,
        recipe: {
          houseId: id.houseId,
        },
      },
    });

    return new RecipeInstruction(
      prismaRecipeInstruction.id,
      prismaRecipeInstruction.recipeId,
      id.houseId,
      prismaRecipeInstruction.order,
      prismaRecipeInstruction.text,
      prismaRecipeInstruction.timerNbMinutes,
    );
  }
}
