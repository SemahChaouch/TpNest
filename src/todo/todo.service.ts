import { Injectable, NotFoundException } from '@nestjs/common';
import { AddDto } from './addDTO';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDto } from './UpdateDto';
@Injectable()
export class TodoService {
    todos: Todo[] = [];
    getTodos():Todo[]{
        return this.todos;
    }

    addTodo(newTodo: AddDto) {
        const todo = new Todo
        todo.id = uuidv4()
        todo.description=newTodo.description
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
