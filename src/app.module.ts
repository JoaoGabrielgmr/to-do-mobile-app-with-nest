import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestJs/config';

import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { BoardModule } from './board/board.module';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';

import { NoteModule } from './note/note.module';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';

import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { DataBaseModule } from './database/prisma/database.module';

@Module({
  imports: [UserModule, BoardModule, NoteModule, CategoryModule, ConfigModule.forRoot(), DataBaseModule],
  controllers: [UserController, BoardController, NoteController, CategoryController],
  providers: [UserService, CategoryService, NoteService, BoardService],
})
export class AppModule {}
