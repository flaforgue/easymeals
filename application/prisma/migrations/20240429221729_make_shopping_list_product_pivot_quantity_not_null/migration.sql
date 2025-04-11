/*
  Warnings:

  - Made the column `quantity` on table `ShoppingListProductPivot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ShoppingListProductPivot" ALTER COLUMN "quantity" SET NOT NULL;
