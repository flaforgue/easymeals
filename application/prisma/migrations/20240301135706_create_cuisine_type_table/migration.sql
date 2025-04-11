-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "cuisineTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CuisineType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "illustrationUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CuisineType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_cuisineTypeId_fkey" FOREIGN KEY ("cuisineTypeId") REFERENCES "CuisineType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
