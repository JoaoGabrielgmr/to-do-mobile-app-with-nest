import { Module } from '@nestjs/common';

import { DataBaseModule } from 'src/database/prisma/database.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [DataBaseModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
