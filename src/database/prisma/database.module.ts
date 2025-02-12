import { Module } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { UserRepository } from "./repositories/user.repository";
import { PrismaService } from "./prisma.service";
import { UserController } from "src/user/user.controller";

@Module({
    exports: [UserRepository, PrismaService],
    providers: [UserRepository, PrismaService]
})

export class DataBaseModule{}