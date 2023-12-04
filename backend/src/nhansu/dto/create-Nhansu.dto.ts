
import { ApiProperty } from '@nestjs/swagger';
import { Chucvu } from '../../chucvu/chucvu.schema';
import { User } from '../../auth/schemas/user.schema';
import { IsEmpty } from 'class-validator';



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
    @IsEmpty({message: "you cannot pass user id"})
    readonly user:User;
    
}