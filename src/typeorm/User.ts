import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    id: number;

    @Column({
        name: 'username'
    }) 
    username: string

    @Column({
        name: 'email_address',
        default: ''
    })
    emailAddress: string

    @Column({
        name: 'age',
        nullable: true
    })
    age: number
}