import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose"; 
import { Document } from 'mongoose';
import { Chucvu } from '../../chucvu/chucvu.schema';


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
}

export const NhanSuSchema = SchemaFactory.createForClass(NhanSu)