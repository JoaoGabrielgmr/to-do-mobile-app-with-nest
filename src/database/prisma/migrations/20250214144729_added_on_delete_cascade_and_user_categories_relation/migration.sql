-- DropForeignKey
ALTER TABLE `Board` DROP FOREIGN KEY `Board_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Note` DROP FOREIGN KEY `Note_boardId_fkey`;

-- DropIndex
DROP INDEX `Board_userId_fkey` ON `Board`;

-- DropIndex
DROP INDEX `Note_boardId_fkey` ON `Note`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Board` ADD CONSTRAINT `Board_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
