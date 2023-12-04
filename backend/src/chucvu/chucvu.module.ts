// chucvu/chucvu.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChucvuController } from './chucvu.controller';
import { ChucvuService } from './chucvu.service';
import { Chucvu, ChucvuSchema } from './chucvu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chucvu.name, schema: ChucvuSchema }]),
  ],
  controllers: [ChucvuController],
  providers: [ChucvuService],
})
export class ChucvuModule {}
