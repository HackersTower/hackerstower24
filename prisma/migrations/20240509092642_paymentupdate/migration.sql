-- AlterTable
ALTER TABLE "WorkshopPayment" ADD COLUMN     "longurl" TEXT NOT NULL DEFAULT 'N/A',
ADD COLUMN     "paymentId" TEXT NOT NULL DEFAULT 'N/A',
ADD COLUMN     "paymentRequestId" TEXT NOT NULL DEFAULT 'N/A';
