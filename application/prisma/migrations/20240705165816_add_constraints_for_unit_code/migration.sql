/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.
  - Made the column `code` on table `Unit` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "code" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Unit_code_key" ON "Unit"("code");
