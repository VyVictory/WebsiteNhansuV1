import { IsEmpty } from 'class-validator';
import { Chucvu } from '../../chucvu/chucvu.schema';
import { User } from '../../auth/schemas/user.schema';


export default class UpdateNhanSuDto{
    readonly Hoten:string;
    readonly Cccd:string;
    readonly Mnv:string;
    readonly Sdt:string;
    readonly luong:number;
    readonly Chucvu:Chucvu;
    @IsEmpty({message: "you cannot pass user id"})
    readonly user:User;
}