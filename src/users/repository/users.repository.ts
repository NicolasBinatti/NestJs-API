import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract create(name: string, email: string, password: string): Promise<User>

  abstract findMany(): Promise<User[]>

  abstract findOne(id: number): Promise<User>

  abstract update(id: number, data: any): Promise<User>

  abstract delete(id: number): Promise<User>
}