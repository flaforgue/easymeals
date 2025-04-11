-- CreateTable
CREATE TABLE "UserRecipeBookmark" (
    "userId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRecipeBookmark_userId_recipeId_key" ON "UserRecipeBookmark"("userId", "recipeId");

-- AddForeignKey
ALTER TABLE "UserRecipeBookmark" ADD CONSTRAINT "UserRecipeBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRecipeBookmark" ADD CONSTRAINT "UserRecipeBookmark_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
