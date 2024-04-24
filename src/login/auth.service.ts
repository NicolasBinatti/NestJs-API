import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from '../infra/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService, private jwtService: JwtService) {
  }

  async login(loginAuthDto: LoginAuthDto): Promise<String> {
    const user = await this.prisma.users.findFirst({
      where: { email: loginAuthDto.email },
    });

    if (user?.password !== loginAuthDto.password) {
      throw new UnauthorizedException();
    }

    return await this.generateToken(loginAuthDto);
  }

  private async generateToken(dataLogin: LoginAuthDto) {
    return this.jwtService.signAsync({
      username: dataLogin.email,
      password: dataLogin.password,
    });
  }
}
