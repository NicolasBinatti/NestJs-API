import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsUniqueValidator } from './is-unique.validator';

@Module({
  providers: [IsUniqueValidator, PrismaService],
})
export class ValidatorsModule {}
