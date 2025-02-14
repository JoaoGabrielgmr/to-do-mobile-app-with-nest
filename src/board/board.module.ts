import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { DataBaseModule } from 'src/database/prisma/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
