import { IngredientCategory } from '#/prisma/client';

export abstract class IngredientCategoryReadRepository {
  public abstract getAll(): Promise<IngredientCategory[]>;
}
