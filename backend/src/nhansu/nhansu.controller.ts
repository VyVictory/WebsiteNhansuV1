//import UpdateNhanSuDto from './dto/update-Nhansu.dto';
import { Promise } from 'mongoose';
import { NhansuService } from './nhansu.service';
import { Controller,Get, Post,Body,Param, Put,Delete } from '@nestjs/common';
import { NhanSu } from './schema/Nhansu.schema';
//import { createNhanSuDto } from './dto/create-Nhansu.dto';
import { ApiTags } from '@nestjs/swagger/dist';


    @ApiTags('Nhân Sự')

@Controller('nhansu')
export class NhansuController {
    constructor(private NhansuService: NhansuService) {}
        @Get()
        async getAllNhanSu(): Promise<NhanSu[]>{
        return this.NhansuService.findAll();
        }

        /*
        
          @Get()
  async getAllThongTinNhanSu() {
    return this.thongtinnhansuService.getAllThongTinNhanSu();
  }

  @Get(':id')
  async getThongTinNhanSuById(@Param('id') id: string) {
    return this.thongtinnhansuService.getThongTinNhanSuById(id);
  }
  @Post()
  async createThongTinNhanSu(@Body() data: Partial<ThongTinNhanSu>) {
    return this.thongtinnhansuService.createThongTinNhanSu(data);
  }

  

  @Delete(':id')
  async deleteThongTinNhanSu(@Param('id') id: string) {
    return this.thongtinnhansuService.deleteThongTinNhanSu(id);
  }
        ------------------
        @Post()
        async createNhansu(
            @Body()
            NhanSu: createNhanSuDto
        ):Promise<NhanSu>{
            return this.NhansuService.create(NhanSu);
        }
        -------------------
        */
        @Post()
        async createNhansu(
            @Body()
            data: NhanSu
        ):Promise<NhanSu>{
            return this.NhansuService.create(data);
        }
        
        @Get(':id')
        async getNhansu(
            @Param('id')
            id: string,
        ): Promise<NhanSu>{
        return this.NhansuService.findById(id);
        }


        @Put(':id')
        async UpdateNhanSu(
            @Param('id')
            id: string,
            @Body()
            data: NhanSu,
        ):Promise<NhanSu>{
            return this.NhansuService.updateById(id, data);
        }
        /* @Put(':id')
  async updateThongTinNhanSu(@Param('id') id: string, @Body() data: Partial<ThongTinNhanSu>) {
    return this.thongtinnhansuService.updateThongTinNhanSu(id, data);
  }*/

        @Delete(':id')
        async DeleteNhansu(
            @Param('id')
            id: string,
        ): Promise<NhanSu>{
        return this.NhansuService.deleteById(id);
        }

    }
