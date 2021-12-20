/*
  Warnings:

  - Made the column `id` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
