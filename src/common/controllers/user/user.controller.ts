import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/common/services/user/user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    getUser() {
        return this.userService.findUser();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.findUserById(id);
        if (user) return user;
        else throw new HttpException('Customer Not Found!', HttpStatus.NOT_FOUND);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUser: CreateUserDto) {
        console.log(createUser)
        this.userService.createUser(createUser);
    }

}
