/*
  Warnings:

  - You are about to drop the `Dummy_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Institute" AS ENUM ('MSIT');

-- CreateEnum
CREATE TYPE "CurrentYear" AS ENUM ('First', 'Second', 'Third', 'Fourth');

-- CreateEnum
CREATE TYPE "Sem" AS ENUM ('First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth');

-- CreateEnum
CREATE TYPE "Stream" AS ENUM ('CSE', 'CSBS', 'IT', 'ECE', 'EE', 'ME', 'CE', 'AIML', 'AIDS', 'DS', 'CYBER_SECURITY', 'IOT');

-- DropTable
DROP TABLE "Dummy_User";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "username" TEXT NOT NULL,
    "institutename" "Institute" NOT NULL,
    "presentyear" "CurrentYear" NOT NULL,
    "stream" "Stream" NOT NULL,
    "semester" "Sem" NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "Stage" TEXT NOT NULL DEFAULT 'Ninija',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkid_key" ON "User"("clerkid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
