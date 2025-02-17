import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ email });

    if (user && user?.password === password) {
      const { password, email, phone, avatar, status, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userValid = await this.validateUser(user.email, user.password);

    if (!userValid) throw new UnauthorizedException();

    const payload = { name: user.name, sub: user.id };
    return {
      name: userValid.name,
      access_token: this.jwtService.sign(payload),
    };
  }
}
