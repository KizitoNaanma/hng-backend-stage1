import { Controller, Get, Query, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(@Query('visitor_name') visitorName: string, @Req() request: Request, @Ip() ip: string) {
    // const clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress || ip;
    console.log({socket: request.socket.remoteAddress})
    const clientIp  = request.ip
    console.log(clientIp)
    return await this.appService.getHello(visitorName, clientIp as string);
  }
}
