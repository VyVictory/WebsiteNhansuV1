// thongtinnhansu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Calamviec } from 'calamviec/calamviec.schema';
import { Document } from 'mongoose';
import { NhanSu } from 'nhansu/schema/Nhansu.schema';

@Schema()
export class Chamcong extends Document {
  @Prop({ type: 'ObjectId', ref: 'Idns' })
  Idns: NhanSu;

  @Prop({ type: 'ObjectId', ref: 'Idcalamviec' })
  Idcalamviec: Calamviec;

  @Prop()
  Thoigianlam: number;

  @Prop()
  luong: number;
}

export const ChamcongSchema = SchemaFactory.createForClass(Chamcong);
