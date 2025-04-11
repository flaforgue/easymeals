/*
  Warnings:

  - Added the required column `houseId` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseId` to the `ShoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "houseId" TEXT;

-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "houseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "houseId" TEXT;

-- AlterTable
ALTER TABLE "ShoppingList" ADD COLUMN     "houseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
