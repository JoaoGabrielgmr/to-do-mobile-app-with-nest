import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DataBaseModule } from 'src/database/prisma/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
