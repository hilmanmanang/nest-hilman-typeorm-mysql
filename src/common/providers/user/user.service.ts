import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    findCustomer() {
        return {
            email: 'test'
        }
    }

}
