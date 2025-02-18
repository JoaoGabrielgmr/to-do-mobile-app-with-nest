/*
  Warnings:

  - Made the column `noteId` on table `File` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_noteId_fkey`;

-- DropIndex
DROP INDEX `File_noteId_fkey` ON `File`;

-- AlterTable
ALTER TABLE `File` MODIFY `noteId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_noteId_fkey` FOREIGN KEY (`noteId`) REFERENCES `Note`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
