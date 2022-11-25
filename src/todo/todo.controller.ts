import { Controller, Post , Get, Body,Param,Delete,Put, Patch, ParseIntPipe} from '@nestjs/common';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
import { AddDto } from './addDTO';
import { UpdateDto } from './UpdateDto';
import { TodoService } from './todo.service';
import { PipePipe } from './pipe.pipe';
import { TodoEntity } from './entities/todo.entity';
@Controller('todo')
export class TodoController {
    private todos=[]
    constructor(
        private todoService: TodoService
     ) {}

    @Get()
    async getAllTodos(): Promise<TodoEntity[]>{
       return await this.todoService.getAllTodos();
    }
    @Post()
    async addTodoDB(@Body() todo : AddDto) : Promise<TodoEntity>{
        return await this.todoService.addTodoDB(todo)
    }
    @Patch(':id')
    async updateTodoDB(@Body() todo : UpdateDto,@Param('id',ParseIntPipe)id:number) : Promise<TodoEntity>{
        return await this.todoService.updateTodoDB(id,todo)
    }
    @Delete(':id')
    async removeTodo(
        @Param('id',ParseIntPipe)id:number
    ){
        return this.todoService.removeTodo(id);
    }
    @Delete(':id')
    async softDeleteTodo(
        @Param('id',ParseIntPipe)id:number
    ){
        return this.todoService.softDeleteTodo(id);
    }
    @Get('restore/:id')
    async restoreTodo(id:number){
        return await this.todoService.restoreTodo(id)
    }
    @Get('nombre')
    async todoNB(){
        return this.todoService.TodoNB();
    }


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
    
    @Post('Skills')
    Transform(@Body(PipePipe) data){
        return data
    }

}
