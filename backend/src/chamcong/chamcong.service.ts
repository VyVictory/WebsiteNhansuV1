// thongtinnhansu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chamcong } from './chamcong.schema';

@Injectable()
export class ChamcongService {
  constructor(@InjectModel(Chamcong.name) private chamcongModel: Model<Chamcong>) {}

  async getAllChamcong(): Promise<Chamcong[]> {
    return this.chamcongModel.find().exec();
  }

  async getChamcongById(id: string): Promise<Chamcong> {
    const Chamcong = await this.chamcongModel.findById(id)

    if(!Chamcong){
        throw new NotFoundException(' không tồn tại');
    }else return Chamcong;
}

  async createChamcong(data: Partial<Chamcong>): Promise<Chamcong> {
    const newChamcong = new this.chamcongModel(data);
    return newChamcong.save();
  }

  async updateChamcong(id: string, data: Partial<Chamcong>): Promise<Chamcong> {
    return this.chamcongModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteChamcong(id: string): Promise<Chamcong> {
    return this.chamcongModel.findByIdAndDelete(id).exec();
  }
}
