-- CreateTable
CREATE TABLE "Dummy_User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Dummy_User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dummy_User_email_key" ON "Dummy_User"("email");
