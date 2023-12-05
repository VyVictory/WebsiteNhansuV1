import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NhansuModule } from './nhansu/nhansu.module';
//import { ThongTinNhanSuModule } from './chucvu/thongtinnhansu.module';
import { ChucvuModule } from './chucvu/chucvu.module';

import { CalamviecModule } from 'calamviec/calamviec.module';
import { ChamcongModule } from 'chamcong/chamcong.module';
import { ConfigModule } from '@nestjs/config';
//import { RoleModule } from 'role/role.module';
import { AccountModule } from 'account/account.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'evn',
    isGlobal:true,
  }),
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/doan1'),
    NhansuModule, ChucvuModule, CalamviecModule, ChamcongModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
