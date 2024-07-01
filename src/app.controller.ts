import { Controller, Get, Query, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(@Query('visitor_name') visitorName: string, @Req() request: Request, @Ip() ip: string) {
    const clientIp = request.socket.remoteAddress || request.headers['x-forwarded-for'] || ip;
    return await this.appService.getHello(visitorName, clientIp as string);
  }
}
