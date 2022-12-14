import { Module } from '@nestjs/common';
import { UserService } from 'src/common/providers/user/user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
