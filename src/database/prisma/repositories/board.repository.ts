import { Global, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import {Prisma} from '@prisma/client'
import { UpdateBoardDto } from "src/modules/board/dto/update-board.dto";


@Global()
@Injectable()
export class BoardRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(where: Prisma.BoardWhereInput) {
        return this.prisma.board.findMany({
            where
        })
    }

    async findMany(where: Prisma.BoardWhereInput) {
        return this.prisma.board.findMany({
            where
        })
    }

    async create(data: Prisma.BoardCreateInput) {
        return this.prisma.board.create({
            data
        })
    }

    async update(userId: number, data: UpdateBoardDto) {
        return this.prisma.board.update({
            where: {Id: userId},
            data
        })
    }

    async remove(Id: number) {
        return this.prisma.board.delete({
            where: {Id: Id}
        })
    }

}