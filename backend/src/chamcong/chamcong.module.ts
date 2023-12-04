// thongtinnhansu/thongtinnhansu.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChamcongController } from './chamcong.controller';
import { ChamcongService } from './chamcong.service';
import { Chamcong, ChamcongSchema } from './chamcong.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chamcong.name, schema: ChamcongSchema }]),
  ],
  controllers: [ChamcongController],
  providers: [ChamcongService],
})
export class ChamcongModule {}
