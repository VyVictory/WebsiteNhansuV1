import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose"; 
import mongoose, { Document } from 'mongoose';
import { Chucvu } from '../../chucvu/chucvu.schema';
import { User } from "../../auth/schemas/user.schema";


@Schema({
    timestamps:true
})

export class NhanSu extends Document{
    @Prop()
    Hoten:string;

    @Prop()
    Cccd:string;

    @Prop()
    Mnv:string;

    @Prop()
    Sdt:string;

    @Prop()
    luong:number;

    @Prop({ type: 'ObjectId', ref: 'Chucvu' })
    Chucvu: Chucvu;

    // nghi chỗ này lỗi lắm
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user:User;
}

export const NhanSuSchema = SchemaFactory.createForClass(NhanSu)