import { User } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cv } from "../../cvs/entities/cv.entity";
@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    designation : String ;
    @ManyToMany(
        type => Cv,
        (cv) => cv.skills,
        {cascade:true}
    )
    cvs: Cv[];
    @CreateDateColumn({
        update:false
    })
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt : Date;
    @DeleteDateColumn()
    deletedAt:Date;
}
