import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeInstructionWriteRepository implements RecipeInstructionWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async incrementOrdersFrom(recipeId: { recipeId: string; houseId: string }, fromOrder: number): Promise<void> {
    await this.prisma.recipeInstruction.updateMany({
      where: {
        order: {
          gte: fromOrder,
        },
        recipe: {
          id: recipeId.recipeId,
          houseId: recipeId.houseId,
        },
      },
      data: {
        order: {
          increment: 1,
        },
      },
    });

    return;
  }

  public async decrementOrdersAfter(
    recipeId: {
      recipeId: string;
      houseId: string;
    },
    afterOrder: number,
  ): Promise<void> {
    await this.prisma.recipeInstruction.updateMany({
      where: {
        order: {
          gt: afterOrder,
        },
        recipe: {
          id: recipeId.recipeId,
          houseId: recipeId.houseId,
        },
      },
      data: {
        order: {
          decrement: 1,
        },
      },
    });

    return;
  }

  public async create(recipeInstruction: RecipeInstruction): Promise<void> {
    await this.prisma.recipeInstruction.create({
      data: {
        id: recipeInstruction.id,
        order: recipeInstruction.order,
        text: recipeInstruction.text,
        timerNbMinutes: recipeInstruction.timerNbMinutes,
        recipe: {
          connect: {
            id: recipeInstruction.recipeId,
            houseId: recipeInstruction.houseId,
          },
        },
      },
    });

    return;
  }

  public async createMany(recipeInstructions: RecipeInstruction[]): Promise<void> {
    await this.prisma.recipeInstruction.createMany({
      data: recipeInstructions.map((recipeInstruction) => {
        return {
          id: recipeInstruction.id,
          order: recipeInstruction.order,
          text: recipeInstruction.text,
          timerNbMinutes: recipeInstruction.timerNbMinutes,
          recipeId: recipeInstruction.recipeId,
        };
      }),
    });

    return;
  }

  public async updateInfos(recipeInstruction: RecipeInstruction): Promise<void> {
    await this.prisma.recipeInstruction.update({
      where: {
        id: recipeInstruction.id,
        recipe: {
          houseId: recipeInstruction.houseId,
        },
      },
      data: {
        text: recipeInstruction.text,
        timerNbMinutes: recipeInstruction.timerNbMinutes,
      },
    });

    return;
  }

  public async delete(id: { instructionId: string; houseId: string }): Promise<void> {
    await this.prisma.recipeInstruction.delete({
      where: {
        id: id.instructionId,
        recipe: {
          houseId: id.houseId,
        },
      },
    });

    return;
  }
}
