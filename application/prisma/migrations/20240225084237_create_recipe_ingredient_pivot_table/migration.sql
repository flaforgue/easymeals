-- CreateTable
CREATE TABLE "RecipeIngredientPivot" (
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RecipeIngredientPivot_pkey" PRIMARY KEY ("recipeId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "RecipeIngredientPivot" ADD CONSTRAINT "RecipeIngredientPivot_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredientPivot" ADD CONSTRAINT "RecipeIngredientPivot_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
