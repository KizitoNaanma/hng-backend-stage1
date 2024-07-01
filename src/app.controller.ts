import { Controller, Get, Query, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(@Query('visitor_name') visitorName: string, @Ip() clientIp: string) {
    // const clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    return this.appService.getHello(visitorName, clientIp);
  }
}
