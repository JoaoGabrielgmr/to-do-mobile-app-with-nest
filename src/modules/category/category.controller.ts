import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Prisma } from '@prisma/client';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('category')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('categories/user/:userId')
  findAll(@Param('userId') userId: string) {
    return this.categoryService.findAll({userId: parseInt(userId)});
  }

  @Get('category/:Id')
  findCategory(@Param('Id') Id) {
    return this.categoryService.findOne({Id: parseInt(Id)});
  }

  @Delete('category/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
