import { TodoStatus } from "./todo.status";

export class UpdateDto{
    description : String;
    name : String;
    status:TodoStatus
}