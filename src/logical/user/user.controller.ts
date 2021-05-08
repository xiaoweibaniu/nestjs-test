import { Controller, Post, Body, Get, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('finduser')
  // @ApiOperation({ title: '测试1' })
  findUser(@Body() body: any) {
    return this.userService.findUser(body.username);
  }

  @Get('')
  @Redirect('https://www.baidu.com')
  findAll(): string {
    return 'This a action returns all cats.';
  }
}
