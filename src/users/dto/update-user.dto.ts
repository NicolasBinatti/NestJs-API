import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsInt, Length, Validate } from 'class-validator';
import { IsUniqueValidator } from '../../request-validators/is-unique.validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Length(5, 100)
  name?: string;

  @IsEmail()
  @Validate(IsUniqueValidator, ['users', 'email', true])
  email?: string;

  @Length(6, 20)
  password?: string;
}
