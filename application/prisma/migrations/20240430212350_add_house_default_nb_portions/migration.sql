-- DropIndex
DROP INDEX "House_name_key";

-- AlterTable
ALTER TABLE "House" ADD COLUMN     "defaultNbPortions" INTEGER NOT NULL DEFAULT 1;
