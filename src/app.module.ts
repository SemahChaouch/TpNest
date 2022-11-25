import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierController } from './premier/premier.controller';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '', 
    database: 'tp2_nest',
    synchronize: true,
    entities:["dist/**/*.entity{.ts,.js}"]
  })],
  controllers: [AppController, PremierController],
  providers: [AppService],
})
export class AppModule {}
