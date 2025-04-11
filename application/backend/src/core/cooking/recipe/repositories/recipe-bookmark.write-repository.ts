export abstract class RecipeBookmarkWriteRepository {
  public abstract create(id: { userId: string; recipeId: string }): Promise<void>;

  public abstract delete(id: { userId: string; recipeId: string }): Promise<void>;
}
