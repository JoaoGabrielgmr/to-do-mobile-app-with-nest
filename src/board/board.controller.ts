import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  //get board by category
  @Get('boards/category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.boardService.findAll( {categoryId: +categoryId});
  }
  //get board by user id
  @Get('boards/user/:userId')
  findOne(@Param('userId') userId: string) {
    return this.boardService.findOne({userId: +userId});
  }
  
  @Post('board')
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Patch('board/:id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete('board/:id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(parseInt(id));
  }
}
