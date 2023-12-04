// thongtinnhansu/thongtinnhansu.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalamviecController } from './calamviec.controller';
import { CalamviecService } from './calamviec.service';
import { Calamviec, CalamviecSchema } from './calamviec.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Calamviec.name, schema: CalamviecSchema }]),
  ],
  controllers: [CalamviecController],
  providers: [CalamviecService],
})
export class CalamviecModule {}