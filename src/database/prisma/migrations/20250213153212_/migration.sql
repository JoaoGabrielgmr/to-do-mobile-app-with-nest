/*
  Warnings:

  - You are about to drop the column `boardId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `_BoardCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_BoardCategories` DROP FOREIGN KEY `_BoardCategories_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BoardCategories` DROP FOREIGN KEY `_BoardCategories_B_fkey`;

-- DropIndex
DROP INDEX `Board_categoryId_key` ON `Board`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `boardId`;

-- DropTable
DROP TABLE `_BoardCategories`;

-- AddForeignKey
ALTER TABLE `Board` ADD CONSTRAINT `Board_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
