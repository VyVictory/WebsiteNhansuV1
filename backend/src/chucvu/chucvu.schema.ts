// chucvu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chucvu extends Document {
  @Prop()
  Tenchucvu: string;

  @Prop()
  Quyenhang:string;

  @Prop()
  Ghichu: string;
}

export const ChucvuSchema = SchemaFactory.createForClass(Chucvu);
