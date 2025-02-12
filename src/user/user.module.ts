import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/database/prisma/repositories/user.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { DataBaseModule } from 'src/database/prisma/database.module';


@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
