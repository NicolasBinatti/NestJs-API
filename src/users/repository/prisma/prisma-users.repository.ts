import { User } from '../../entities/user.entity';
import { PrismaService } from '../../../infra/prisma/prisma.service';
import { UsersRepository } from '../users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {

  constructor(private prisma: PrismaService) {
  }
  async create(name: string, email: string, password: string): Promise<User> {
    return this.prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  }

  findMany(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prisma.users.findUnique({ where: { id: id } });
  }

  update(id: number, data: any): Promise<any> {

    const userExists = this.findOne(id);
    if (!userExists) {
      throw new NotFoundException('User not found to update.');
    }

    return this.prisma.users.update({
      where: { id: id },
      data: data,
    });
  }

  delete(id: number): Promise<User> {
    return this.prisma.users.delete({ where: { id: id } });
  }


}