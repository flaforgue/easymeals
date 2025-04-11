-- CreateTable
CREATE TABLE "RecipeInstruction" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "RecipeInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecipeInstruction_recipeId_order_key" ON "RecipeInstruction"("recipeId", "order");

-- AddForeignKey
ALTER TABLE "RecipeInstruction" ADD CONSTRAINT "RecipeInstruction_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
