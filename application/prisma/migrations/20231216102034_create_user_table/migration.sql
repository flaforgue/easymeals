-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "idpId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_idpId_key" ON "User"("idpId");
