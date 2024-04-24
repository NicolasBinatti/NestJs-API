import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ValidatorsModule } from '../request-validators/validators.module';
import { UsersRepository } from './repository/users.repository';
import { PrismaUsersRepository } from './repository/prisma/prisma-users.repository';
import { PrismaService } from '../infra/prisma/prisma.service';

@Module({
  imports: [ValidatorsModule],
  controllers: [UsersController],
  providers: [
    PrismaService,
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository
    }
  ],
})
export class UsersModule {}
