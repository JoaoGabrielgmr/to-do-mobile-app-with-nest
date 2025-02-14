import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Prisma } from '@prisma/client';
import { CategoryRepository } from 'src/database/prisma/repositories/category.repository';

@Injectable()
export class CategoryService {

  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findOne(categoryWhereInput: Prisma.CategoryWhereInput) {
      return this.categoryRepository.findOne(categoryWhereInput)
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async findAll(categoryWhereInput: Prisma.CategoryWhereInput) {
    return this.categoryRepository.findAll(categoryWhereInput);
  }

  async findBoardByCategory(categoryWhereInput: Prisma.CategoryWhereInput) {
    return this.categoryRepository.findBoardByCategory(categoryWhereInput);
  }

  async remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
