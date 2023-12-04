import { ApiProperty } from '@nestjs/swagger';
import { Chucvu } from '../../chucvu/chucvu.schema';


export class createNhanSuDto{
    @ApiProperty()
    readonly Hoten:string;
    @ApiProperty()
    readonly Cccd:string;
    @ApiProperty()
    readonly Mnv:string;
    @ApiProperty()
    readonly Sdt:string;
    @ApiProperty()
    readonly luong:number;
    @ApiProperty()
    readonly Chucvu:Chucvu;
}