// thongtinnhansu.service.ts
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './account.schema';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async getAllAccount(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async getAccountById(id: string): Promise<Account> {
    const Account = await this.accountModel.findById(id)

    if(!Account){
        throw new NotFoundException('Account không tồn tại');
    }else return Account;
}

  async createAccount(data: Partial<Account>): Promise<Account> {
    const newAccount = new this.accountModel(data);
    return newAccount.save();
  }

  async updateAccount(id: string, data: Partial<Account>): Promise<Account> {
    return this.accountModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteAccount(id: string): Promise<Account> {
    return this.accountModel.findByIdAndDelete(id).exec();
  }
}
