import { Cv } from "../../cvs/entities/cv.entity";
import { Skill } from "../../skills/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username : String;
    @Column()
    email : String;
    @Column()
    password : String ;
    @OneToMany(
        type=>Cv,
        (cv)=>cv.user
    )
    cvs:Cv[];

    @CreateDateColumn({
        update:false
    })
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt : Date;
    @DeleteDateColumn()
    deletedAt:Date;

}
