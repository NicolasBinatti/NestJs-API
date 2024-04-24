import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto.name, createUserDto.email, createUserDto.password);
  }

  async findAll() {
    return await this.userRepository.findMany();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
