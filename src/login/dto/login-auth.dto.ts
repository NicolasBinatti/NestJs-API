import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  @IsNotEmpty({ message: 'The email should not be empty.' })
  readonly email: string;


  @Length(6, 20)
  @IsNotEmpty({ message: 'The password should not be empty.' })
  readonly password: string;
}
