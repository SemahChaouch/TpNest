import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierController } from './premier/premier.controller';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CvsModule } from './cvs/cvs.module';
import { UserModule } from './user/user.module';
import { SkillsModule } from './skills/skills.module';
import { CvsController } from './cvs/cvs.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [PremierModule, TodoModule, CvsModule, UserModule, SkillsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '', 
    database: 'tp2_nest',
    synchronize: true,
    autoLoadEntities:true,
  })],
  controllers: [AppController, PremierController],
  providers: [AppService],
})
export class AppModule {}
