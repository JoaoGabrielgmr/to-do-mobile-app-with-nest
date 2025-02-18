/*
  Warnings:

  - You are about to drop the column `file` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Note` DROP COLUMN `file`;

-- CreateTable
CREATE TABLE `File` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `file` JSON NOT NULL,
    `noteId` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_noteId_fkey` FOREIGN KEY (`noteId`) REFERENCES `Note`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
