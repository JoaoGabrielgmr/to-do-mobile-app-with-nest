import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { PrismaService } from "./prisma.service";
import { BoardRepository } from "./repositories/board.repository";
import { NoteRepository } from "./repositories/note.repository";
import { CategoryRepository } from "./repositories/category.repository";

@Module({
    exports: [
        CategoryRepository,
        UserRepository,
        BoardRepository,
        NoteRepository,
        PrismaService],
    providers: [
        CategoryRepository,
        UserRepository,
        BoardRepository,
        NoteRepository,
        PrismaService]
})

export class DataBaseModule {}