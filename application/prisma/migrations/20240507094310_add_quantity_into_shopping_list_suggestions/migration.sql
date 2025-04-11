/*
  Warnings:

  - Made the column `quantity` on table `ShoppingListIngredientPivot` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `quantity` to the `ShoppingListIngredientSuggestionPivot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingListIngredientPivot" ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "ShoppingListIngredientSuggestionPivot" ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL;
