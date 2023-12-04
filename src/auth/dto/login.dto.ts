import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class LoginDto{
    

    @IsString()
    @IsEmail({}, {message: 'please enter cerrect email'})
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password:string;
}