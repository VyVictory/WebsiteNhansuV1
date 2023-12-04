// thongtinnhansu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChamcongService } from './chamcong.service';
import { Chamcong } from './chamcong.schema';
@Controller('chamcong')
export class ChamcongController {
  constructor(private readonly chamcongService: ChamcongService) {}

  @Get()
  async getAllChamcong() {
    return this.chamcongService.getAllChamcong();
  }

  @Get(':id')
  async getChamcongById(@Param('id') id: string) {
    return this.chamcongService.getChamcongById(id);
  }

  @Post()
  async createChamcong(@Body() data: Partial<Chamcong>) {
    return this.chamcongService.createChamcong(data);
  }

  @Put(':id')
  async updateChamcong(@Param('id') id: string, @Body() data: Partial<Chamcong>) {
    return this.chamcongService.updateChamcong(id, data);
  }

  @Delete(':id')
  async deleteChamcong(@Param('id') id: string) {
    return this.chamcongService.deleteChamcong(id);
  }
}
