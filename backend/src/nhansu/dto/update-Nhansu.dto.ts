import { Chucvu } from '../../chucvu/chucvu.schema';


export default class UpdateNhanSuDto{
    readonly Hoten:string;
    readonly Cccd:string;
    readonly Mnv:string;
    readonly Sdt:string;
    readonly luong:number;
    readonly Chucvu:Chucvu;
}