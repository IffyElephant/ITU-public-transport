import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/connection/numbers')
  getConnectionNumbers() {
    return this.prisma.connection.findMany({
      select: { type: true, number: true },
    });
  }

  @Get('/connection/stops/:id')
  getConnectionStops(@Param('id') id: string) {
    return this.prisma.connection.findFirst({
      where: { number: id },
      select: { stops: true },
    });
  }

  @Get('/connection/exclusions/:id')
  getConnectionExclusions(@Param('id') id: string) {
    return this.prisma.connection.findFirst({
      where: { number: id },
      select: { exclusion: true },
    });
  }
}
