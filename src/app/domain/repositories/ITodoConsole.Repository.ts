import { ICrudBase } from "../contracts/ICrudBase";
import { TodoDTO } from "../dto/ToDo.DTO";

export interface ITodoConsoleRepositorie<T> extends ICrudBase<TodoDTO> {}


/**
 * Caso de Uso: Apliacacion Consola, extension funcional del Dominio
 */