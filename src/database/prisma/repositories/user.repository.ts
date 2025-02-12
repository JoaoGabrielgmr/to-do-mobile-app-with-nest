import { Global, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import {Prisma} from '@prisma/client'


@Global()
@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(userWhereInput: Prisma.UserWhereInput) {
        return this.prisma.user.findFirst({
            where: userWhereInput
        })
    }


}