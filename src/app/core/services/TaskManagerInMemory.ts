import { TodoDTO } from "../../domain/dto/ToDo.DTO";
import { ITodoConsoleRepositorie } from "../../domain/repositories/ITodoConsole.Repository";

export class TaskManagerInMemory implements ITodoConsoleRepositorie<TodoDTO> {

    private _task: Array<TodoDTO> = [];

    create(payload: TodoDTO): boolean {
        this._task.push(payload);
        return true;
    }
    read(): TodoDTO[] {
        return this._task;
    }
    update(id: number, payload: TodoDTO): boolean {
        this._task.splice(id, 1, payload);
        return true;
    }
    delete(id: number): boolean {
        this._task.splice(id, 1);
        return true;
    }
    
}