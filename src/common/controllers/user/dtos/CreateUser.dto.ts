import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    username: string;

    @IsEmail()
    emailAddress: string;

    @IsNumber()
    age: number;
}