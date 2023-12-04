import { NhansuModule } from './nhansu.module';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NhanSu } from './schema/Nhansu.schema';
import * as mongoose from 'mongoose';
@Injectable()
export class NhansuService {
    constructor(
        @InjectModel(NhanSu.name)
        private NhanSuModel : mongoose.Model<NhanSu>
    ){}
    async findAll(): Promise<NhanSu[]>{
        const NhanSu = await this.NhanSuModel.find()
        return NhanSu;
    }
    /*async create(NhanSu: NhanSu): Promise<NhanSu>{
        const res = await this.NhanSuModel.create(NhanSu)
        return res;
    }*/

    async create(data: Partial<NhanSu>): Promise<NhanSu> {
        const newNhanSu = new this.NhanSuModel(data);
        return newNhanSu.save();
    }
    /**/

    async findById(id: string): Promise<NhanSu>{
        const NhanSu = await this.NhanSuModel.findById(id)
        if(!NhanSu){
            throw new NotFoundException('nhân sự không tồn tại');
        } else return NhanSu;
    }
    /*
    async updateById(id: string, Nhansu:NhanSu): Promise<NhanSu>{
        return await this.NhanSuModel.findByIdAndUpdate(id, Nhansu, {
            new:true,
            runValidators:true,
        });
    }*/
    async updateById(id: string, data: Partial<NhanSu>): Promise<NhanSu> {
        return this.NhanSuModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    /**/
    async deleteById(id: string): Promise<NhanSu>{
        return await this.NhanSuModel.findByIdAndDelete(id);
        }
}
