/*
  Warnings:

  - A unique constraint covering the columns `[joinKey]` on the table `House` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "House" ADD COLUMN     "joinKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "House_joinKey_key" ON "House"("joinKey");
