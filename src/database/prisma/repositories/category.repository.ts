import { Global, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import {Prisma} from '@prisma/client'


@Global()
@Injectable()
export class CategoryRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findOne(categoryWhereInput: Prisma.CategoryWhereInput) {
        return this.prisma.category.findFirst({
            where: categoryWhereInput
        })
    }

    async create(data: Prisma.CategoryCreateInput) {
        return this.prisma.category.create({
            data
        })
    }

    async findAll(where: Prisma.CategoryWhereInput) {
        return this.prisma.category.findMany({where})
    }

    async findBoardByCategory(where: Prisma.CategoryWhereInput) {
        return this.prisma.category.findMany({where})
    }

    async delete(id: number) {
        return this.prisma.category.delete({
            where: {Id: id}
        })
    }

}