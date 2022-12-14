import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './common/controllers/user/user.module';
import entities from './typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nestorm_db',
            entities: entities,
            synchronize: true
        }), 
        UserModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
