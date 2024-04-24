import { IsEmail, IsNotEmpty, Length, Validate } from 'class-validator';
import { IsUniqueValidator } from '../../request-validators/is-unique.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'The name should not be empty.' })
  @Length(5, 100)
  name: string;

  @IsEmail()
  @Validate(IsUniqueValidator, ['users', 'email'])
  @IsNotEmpty({ message: 'The email should not be empty.' })
  email: string;

  @Length(6, 20)
  @IsNotEmpty({ message: 'The password should not be empty.' })
  password: string;
}
