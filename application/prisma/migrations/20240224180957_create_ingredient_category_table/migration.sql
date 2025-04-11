-- CreateTable
CREATE TABLE "IngredientCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "illustrationUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngredientCategory_pkey" PRIMARY KEY ("id")
);
