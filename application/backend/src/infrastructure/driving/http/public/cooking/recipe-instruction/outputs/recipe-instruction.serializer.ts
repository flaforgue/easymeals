import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { RecipeInstruction } from '#/shared';
import { RecipeInstruction as PrismaRecipeInstruction } from '#/prisma/client';

@Injectable()
export class RecipeInstructionSerializer extends BaseSerializer<PrismaRecipeInstruction, RecipeInstruction> {
  public serialize(recipeInstruction: PrismaRecipeInstruction): RecipeInstruction {
    return {
      id: recipeInstruction.id,
      recipeId: recipeInstruction.recipeId,
      order: recipeInstruction.order,
      text: recipeInstruction.text,
      timerNbMinutes: recipeInstruction.timerNbMinutes,
    };
  }
}
