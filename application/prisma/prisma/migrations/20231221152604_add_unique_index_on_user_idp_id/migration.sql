/*
  Warnings:

  - A unique constraint covering the columns `[idpId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_idpId_key" ON "User"("idpId");
