/*
  Warnings:

  - You are about to drop the column `nbPortions` on the `Ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "nbPortions";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "nbPortions" INTEGER NOT NULL DEFAULT 1;
