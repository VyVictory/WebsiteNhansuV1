// thongtinnhansu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Calamviec } from './calamviec.schema';

@Injectable()
export class CalamviecService {
  constructor(@InjectModel(Calamviec.name) private calamviecModel: Model<Calamviec>) {}

  async getAllCalamviec(): Promise<Calamviec[]> {
    return this.calamviecModel.find().exec();
  }

  async getCalamviecById(id: string): Promise<Calamviec> {
    const Calamviec = await this.calamviecModel.findById(id)

    if(!Calamviec){
        throw new NotFoundException('ca làm không tồn tại');
    }else return Calamviec;
}

  async createCalamviec(data: Partial<Calamviec>): Promise<Calamviec> {
    const newCalamviec = new this.calamviecModel(data);
    return newCalamviec.save();
  }

  async updateCalamviec(id: string, data: Partial<Calamviec>): Promise<Calamviec> {
    return this.calamviecModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteCalamviec(id: string): Promise<Calamviec> {
    return this.calamviecModel.findByIdAndDelete(id).exec();
  }
}