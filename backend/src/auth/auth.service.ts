import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt/dist';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { signUpDto } from './dto/signup.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async signUp(signUpDto:signUpDto): Promise<{ token }> {
        const {name,email,password} = signUpDto

        const hashedPassword = await bcrypt.hash(password,15)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id: user._id})
        return { token }
    }
        async login(loginDto: LoginDto): Promise<{ token: string }>{
        const {email,password} = loginDto;

        const user = await this.userModel.findOne({ email})

        if(!user){
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPawordMatched = await bcrypt.compare(password, user.password)

        if(!isPawordMatched){
            throw new UnauthorizedException('invalid email or password')
        }
        const token = this.jwtService.sign({id: user._id})
        return { token }
    }
}

