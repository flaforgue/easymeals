import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';

export abstract class RecipeInstructionWriteRepository {
  public abstract incrementOrdersFrom(
    recipeId: {
      recipeId: string;
      houseId: string;
    },
    fromOrder: number,
  ): Promise<void>;

  public abstract decrementOrdersAfter(
    recipeId: {
      recipeId: string;
      houseId: string;
    },
    afterOrder: number,
  ): Promise<void>;

  public abstract create(recipeInstruction: RecipeInstruction): Promise<void>;

  public abstract createMany(recipeInstructions: RecipeInstruction[]): Promise<void>;

  public abstract updateInfos(recipeInstruction: RecipeInstruction): Promise<void>;

  public abstract delete(id: { instructionId: string; houseId: string }): Promise<void>;
}
