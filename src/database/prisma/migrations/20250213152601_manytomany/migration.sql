/*
  Warnings:

  - You are about to drop the column `color` on the `Board` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `Board` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_boardId_fkey`;

-- DropIndex
DROP INDEX `Category_boardId_fkey` ON `Category`;

-- AlterTable
ALTER TABLE `Board` DROP COLUMN `color`,
    ADD COLUMN `categoryId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `color` VARCHAR(191) NOT NULL DEFAULT 'F3DB6E';

-- CreateTable
CREATE TABLE `_BoardCategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BoardCategories_AB_unique`(`A`, `B`),
    INDEX `_BoardCategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Board_categoryId_key` ON `Board`(`categoryId`);

-- AddForeignKey
ALTER TABLE `_BoardCategories` ADD CONSTRAINT `_BoardCategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `Board`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BoardCategories` ADD CONSTRAINT `_BoardCategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `Category`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
