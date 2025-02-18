import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  UploadedFiles,
  HttpCode,
} from '@nestjs/common';

import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('file')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './src/shared/files',
        filename: (req, file, callback) => {
          // Gera um nome único para o arquivo
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname); // Obtém a extensão do arquivo
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  uploadFile(
    @Body() { noteId }: { noteId: string },
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'png',
        })
        // .addMaxSizeValidator({
        //   maxSize: 100000,
        // })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    const { path, ...rest } = file;
    return this.fileService.create(+noteId, path);
  }

  @Get('files')
  findAll() {
    return this.fileService.findAll();
  }

  @Get('file/:Id')
  findOne(@Query() { Id, noteId }) {
    return this.fileService.findOne({ Id: +Id, noteId: +noteId });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
