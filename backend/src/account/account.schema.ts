import { Role } from './../role/role.schema';
// thongtinnhansu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop()
  User: string;

  @Prop()
  Email: string;

  @Prop()
  Password:string;

  @Prop({ type: 'ObjectId', ref: 'Idns' })
  Idrole: Role;

}

export const AccountSchema = SchemaFactory.createForClass(Account);
