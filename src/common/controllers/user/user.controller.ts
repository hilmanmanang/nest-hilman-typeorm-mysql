import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/common/providers/user/user.service';

@Controller('customers')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get('')
    getCustomer() {
        return this.userService.findCustomer();
    }


}
