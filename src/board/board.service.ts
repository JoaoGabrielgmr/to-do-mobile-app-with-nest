import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from 'src/database/prisma/repositories/board.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoardService {

  constructor(private boardRepository: BoardRepository) {}

  async findOne(boardWhereInput: Prisma.BoardWhereInput) { 
    return this.boardRepository.findFirst(boardWhereInput)
  }

  async findAll(boardWhereInput: Prisma.BoardWhereInput) {
    return this.boardRepository.findMany(boardWhereInput);
  }

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.create(createBoardDto);
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  remove(Id: number) {
    return this.boardRepository.remove(Id);
  }
}
