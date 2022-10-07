import { Controller, Post , Get, Body,Param,Delete,Put} from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { AddDto } from './addDTO';
import { UpdateDto } from './UpdateDto';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
    private todos=[]
    constructor(
        private todoService: TodoService
     ) {}

    @Get('getTodos')
    getTodos(){
        return this.todoService.getTodos;
    }

    @Get(':id')
    getTodoByid(@Param('id') id){
        return this.todoService.getTodoByid(id)}

    @Delete(':id')
    deleteTodo(@Param('id') id) {
    return this.todoService.deleteTodo(id)}
    @Put(':id')
    //updateTodo(@Param('id') id, @Body() todo: Partial <Todo>) {
    updateTodo(@Param('id') id, @Body() todo: UpdateDto){
    return this.todoService.updateTodo(id,todo)

    }
    @Post('addTodo')
    addTodo(@Body() newTodo: AddDto) {
        return this.todoService.addTodo(newTodo)}
}
