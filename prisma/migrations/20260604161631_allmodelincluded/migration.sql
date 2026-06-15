/*
  Warnings:

  - The `Stage` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('Ninija', 'Pro', 'Master');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Stage",
ADD COLUMN     "Stage" "Stage" NOT NULL DEFAULT 'Ninija';

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT,
    "forsem" "Sem" NOT NULL,
    "forstream" "Stream" NOT NULL,
    "uploaderId" TEXT NOT NULL,
    "fileurl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dout" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "notesid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "Dout_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Note_subject_forsem_forstream_idx" ON "Note"("subject", "forsem", "forstream");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dout" ADD CONSTRAINT "Dout_notesid_fkey" FOREIGN KEY ("notesid") REFERENCES "Note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dout" ADD CONSTRAINT "Dout_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
