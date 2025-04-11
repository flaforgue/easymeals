-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "illustrationUrl" TEXT,
    "preparationTimeInMinutes" INTEGER NOT NULL,
    "totalTimeInMinutes" INTEGER NOT NULL,
    "isVegetarian" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
