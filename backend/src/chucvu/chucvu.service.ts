// chucvu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chucvu } from './chucvu.schema';

@Injectable()
export class ChucvuService {
  constructor(@InjectModel(Chucvu.name) private chucvuModel: Model<Chucvu>) {}

  async getAllChucvu(): Promise<Chucvu[]> {
    return this.chucvuModel.find().exec();
  }

  async getChucvuById(id: string): Promise<Chucvu>{
    const Chucvu = await this.chucvuModel.findById(id)

    if(!Chucvu){
        throw new NotFoundException('chức vụ không tồn tại');
    }else return Chucvu;
}

  async createChucvu(data: Partial<Chucvu>): Promise<Chucvu> {
    const newChucvu = new this.chucvuModel(data);
    return newChucvu.save();
  }

  async updateChucvu(id: string, data: Partial<Chucvu>): Promise<Chucvu> {
    return this.chucvuModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteChucvu(id: string): Promise<Chucvu> {
    return this.chucvuModel.findByIdAndDelete(id).exec();
  }
}
