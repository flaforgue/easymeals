import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';
import { RecipeInstruction as PrismaRecipeInstruction } from '#/prisma/client';

export abstract class RecipeInstructionReadRepository {
  public abstract findById(id: { instructionId: string; houseId: string }): Promise<PrismaRecipeInstruction>;

  public abstract getByRecipeId(recipeId: string): Promise<PrismaRecipeInstruction[]>;

  public abstract countByRecipeId(recipeId: string): Promise<number>;

  public abstract findEntityById(id: { id: string; houseId: string }): Promise<RecipeInstruction>;
}
