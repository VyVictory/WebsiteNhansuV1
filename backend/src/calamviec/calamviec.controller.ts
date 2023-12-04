// thongtinnhansu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CalamviecService } from './calamviec.service';
import { Calamviec } from './calamviec.schema';
@Controller('calamviec')
export class CalamviecController {
  constructor(private readonly calamviecService: CalamviecService) {}

  @Get()
  async getAllCalamviec() {
    return this.calamviecService.getAllCalamviec();
  }

  @Get(':id')
  async getCalamviecById(@Param('id') id: string) {
    return this.calamviecService.getCalamviecById(id);
  }
  @Post()
  async createCalamviec(@Body() data: Partial<Calamviec>) {
    return this.calamviecService.createCalamviec(data);
  }

  @Put(':id')
  async updateCalamviec(@Param('id') id: string, @Body() data: Partial<Calamviec>) {
    return this.calamviecService.updateCalamviec(id, data);
  }

  @Delete(':id')
  async deleteCalamviec(@Param('id') id: string) {
    return this.calamviecService.deleteCalamviec(id);
  }
}
