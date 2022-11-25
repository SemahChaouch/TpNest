import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { AddDto } from './addDTO';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDto } from './UpdateDto';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository : Repository<TodoEntity> 
    ){}
    
    async getAllTodos(): Promise<TodoEntity[]>{
        return this.todoRepository.find()
    }

    async addTodoDB(todo: AddDto): Promise<TodoEntity>{
        return await this.todoRepository.save(todo);
    }

    async updateTodoDB(id:number,todo: UpdateDto): Promise<TodoEntity>{
        const ourTodo = await this.todoRepository.preload({
            id, ...todo
        });
        if (!ourTodo){
            throw NotFoundException
        }
        return await this.todoRepository.save(ourTodo);
    }

    async removeTodo(id:number){
       return await this.todoRepository.delete(id)
    }
    async softDeleteTodo(id:number){
        return this.todoRepository.softDelete(id)
    }
    async restoreTodo(id:number){
        return this.todoRepository.restore(id)
    }
    
    async TodoNB(){
        const qb = this.todoRepository.createQueryBuilder('todo');
        qb.select("cv.status,count(cv.id)").groupBy("cv.status");
        return await qb.getRawMany();
    }



    todos: Todo[] = [];
    getTodos():Todo[]{
        return this.todos;
    }

    addTodo(newTodo: AddDto) {
        const todo = new Todo
        todo.id = uuidv4()
        if (newTodo.description.length > 10) {
        todo.description=newTodo.description}
        else {
            throw new NotAcceptableException('length 10');
        }
        todo.name=newTodo.name
        todo.Date=new Date(Date.now());
        this.todos.push(todo);
        return 'added new todo';
    }

    deleteTodo(id :number) {
        const len=this.todos.length
        this.todos = this.todos.filter((e) => e.id != id);
        if (this.todos.length == len){
            return 'couldnt find todo';
        }
        else {
        return 'Deleted Todo';}
    }
    updateTodo(id :Number, todo: UpdateDto){
        const todoUpdate = this.getTodoByid(id);
          todo.description = todoUpdate.description ?? todo.description 
  
          todo.name = todoUpdate.name ?? todo.name 
      
          todoUpdate.Status= todo.status ?? todoUpdate.Status 
  
      }
      getTodoByid(id :Number){
        const ourTodo = this.todos.find((e)=>e.id==id);
        if (ourTodo) {return ourTodo;}
        throw new NotFoundException(`Le todo nexiste pas`);
        }
}
