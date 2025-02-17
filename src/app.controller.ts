import { Controller, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { Public } from './shared/decorators/public.decorator';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
