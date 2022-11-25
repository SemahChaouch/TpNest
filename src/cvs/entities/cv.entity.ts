import { Skill } from "../../skills/entities/skill.entity";
import { User } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Cv {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name : String;
    @Column()
    Firstname : String;
    @Column()
    age : number ;
    @Column()
    cin : number;
    @Column()
    job : String;
    @Column()
    path : String;
    @ManyToOne(
        type => User,
        (user)=>user.cvs
    )
    user: User;
    @ManyToMany(
        type => Skill,
        (skill) => skill.cvs,
        {eager:true}

    )
    @JoinTable()
    skills: Skill[];
    @CreateDateColumn({
        update:false
    })
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt : Date;
    @DeleteDateColumn()
    deletedAt:Date;
}
