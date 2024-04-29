/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `paymentStatus` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `workshopId` on the `Workshop` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentor` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "paymentStatus",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
DROP COLUMN "workshopId",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "mentor" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT 'NA',
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "WorkshopPayment" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkshopPayment_pkey" PRIMARY KEY ("id")
);
