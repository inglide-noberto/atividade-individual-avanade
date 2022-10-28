import { IsEmail, IsNotEmpty, IsNumberString, IsString, MinLength } from "class-validator";

export class createRegisterDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    site: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: number;
}