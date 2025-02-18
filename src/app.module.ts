import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestJs/config';

import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

import { BoardModule } from './modules/board/board.module';
import { BoardController } from './modules/board/board.controller';
import { BoardService } from './modules/board/board.service';

import { NoteModule } from './modules/note/note.module';
import { NoteController } from './modules/note/note.controller';
import { NoteService } from './modules/note/note.service';

import { CategoryModule } from './modules/category/category.module';
import { CategoryController } from './modules/category/category.controller';
import { CategoryService } from './modules/category/category.service';
import { DataBaseModule } from './database/prisma/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { FileModule } from './modules/file/file.module';
import { FileController } from './modules/file/file.controller';
import { FileService } from './modules/file/file.service';

@Module({
  imports: [
    UserModule,
    BoardModule,
    NoteModule,
    FileModule,
    CategoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DataBaseModule,
    AuthModule,
    ConfigModule,
  ],

  controllers: [
    UserController,
    BoardController,
    NoteController,
    FileController,
    CategoryController,
    AppController,
  ],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    CategoryService,
    NoteService,
    FileService,
    BoardService,
  ],
})
export class AppModule {}
