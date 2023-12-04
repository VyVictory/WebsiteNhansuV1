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
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
  }),
  MongooseModule.forRoot(process.env.DB_URI),
    NhansuModule, ChucvuModule, CalamviecModule, ChamcongModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
