// thongtinnhansu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Calamviec extends Document {
  @Prop()
  Tencalam: string;

  @Prop()
  Starttime: string;

  @Prop()
  Endtime: string;

  @Prop()
  Ngay: number;

  @Prop()
  Thang: number;

  @Prop()
  Nam: number;
}

export const CalamviecSchema = SchemaFactory.createForClass(Calamviec);
