import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 局部路由前缀
// @Controller('api')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
}
