// chucvu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChucvuService } from './chucvu.service';
import { Chucvu } from './chucvu.schema';
@Controller('chucvu')
export class ChucvuController {
  constructor(private readonly chucvuService: ChucvuService) {}

  @Get()
  async getAllChucvu() {
    return this.chucvuService.getAllChucvu();
  }

  @Get(':id')
  async getChucvuById(@Param('id') id: string) {
    return this.chucvuService.getChucvuById(id);
  }

  @Post()
  async createChucvu(@Body() data: Partial<Chucvu>) {
    return this.chucvuService.createChucvu(data);
  }

  @Put(':id')
  async updateChucvu(@Param('id') id: string, @Body() data: Partial<Chucvu>) {
    return this.chucvuService.updateChucvu(id, data);
  }

  @Delete(':id')
  async deleteChucvu(@Param('id') id: string) {
    return this.chucvuService.deleteChucvu(id);
  }
}
