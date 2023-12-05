// chucvu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Role extends Document {
  @Prop()
  Quyenhang: string;

  @Prop()
  Quyentruyvan:string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
