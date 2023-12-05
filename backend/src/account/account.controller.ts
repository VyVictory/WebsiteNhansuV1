// thongtinnhansu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.schema';
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async getAllAccount() {
    return this.accountService.getAllAccount();
  }

  @Get(':id')
  async getAccountById(@Param('id') id: string) {
    return this.accountService.getAccountById(id);
  }

  @Post()
  async createAccount(@Body() data: Partial<Account>) {
    return this.accountService.createAccount(data);
  }

  @Put(':id')
  async updateAccount(@Param('id') id: string, @Body() data: Partial<Account>) {
    return this.accountService.updateAccount(id, data);
  }

  @Delete(':id')
  async deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
