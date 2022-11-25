import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TodoStatus } from "../todo.status";

@Entity('todo')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name : String;
    @Column()
    description : String;
    @Column()
    Date : Date ;
    @Column()
    Status : TodoStatus;
    @CreateDateColumn({
        update:false
    })
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt : Date;
    @DeleteDateColumn()
    deletedAt:Date;
}
