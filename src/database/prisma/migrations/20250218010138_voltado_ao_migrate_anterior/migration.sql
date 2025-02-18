/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_noteId_fkey`;

-- AlterTable
ALTER TABLE `Note` ADD COLUMN `file` JSON NULL;

-- DropTable
DROP TABLE `File`;
