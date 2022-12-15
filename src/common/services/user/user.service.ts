import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/common/controllers/user/dtos/CreateUser.dto';
import { User } from 'src/typeorm';

@Injectable()
export class UserService {

    users: User[] = [
        {
            id: 1,
            username: 'Hilman',
            emailAddress: 'hilman@test.com',
            age: 29
        },
        {
            id: 2,
            username: 'Shifa',
            emailAddress: 'shifa@test.com',
            age: 28
        },
        {
            id: 3,
            username: 'Ali',
            emailAddress: 'ali@test.com',
            age: 19
        }
    ]

    findUser() {
        return this.users;
    }

    findUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    createUser(userDto: User) {
        this.users.push(userDto)
    }
}
