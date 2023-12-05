// chucvu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './role.schema';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async getAllRole(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }

  async getRoleById(id: string): Promise<Role>{
    const Role = await this.roleModel.findById(id)

    if(!Role){
        throw new NotFoundException('Role không tồn tại');
    }else return Role;
}

  async createRole(data: Partial<Role>): Promise<Role> {
    const newRole = new this.roleModel(data);
    return newRole.save();
  }

  async updateRole(id: string, data: Partial<Role>): Promise<Role> {
    return this.roleModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteRole(id: string): Promise<Role> {
    return this.roleModel.findByIdAndDelete(id).exec();
  }
}
