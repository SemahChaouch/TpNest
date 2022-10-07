import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierController } from './premier/premier.controller';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController, PremierController],
  providers: [AppService],
})
export class AppModule {}
