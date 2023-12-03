import { Schema } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { NhansuController } from './nhansu.controller';
import { NhansuService } from './nhansu.service';
import { NhanSuSchema } from './schema/Nhansu.schema';

@Module({
  imports: [ MongooseModule.forFeature([{name:'NhanSu', schema: NhanSuSchema}])],
  controllers: [NhansuController],
  providers: [NhansuService],
})
export class NhansuModule {}
