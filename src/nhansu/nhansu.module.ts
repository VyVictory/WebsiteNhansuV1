import { Schema } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { NhansuController } from './nhansu.controller';
import { NhansuService } from './nhansu.service';
import { NhanSuSchema } from './schema/Nhansu.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [ 
    AuthModule,
    MongooseModule.forFeature([{name:'NhanSu', schema: NhanSuSchema}])],
  controllers: [NhansuController],
  providers: [NhansuService],
})
export class NhansuModule {}
