-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_houseId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_houseId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_houseId_fkey";

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;
