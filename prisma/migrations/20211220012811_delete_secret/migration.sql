/*
  Warnings:

  - You are about to drop the column `secret_key` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_secret_key_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "secret_key";
