
export interface ICrudBase<T> {
    create(payload: T): boolean
    read(): T[]
    update(id: number, payload: T): boolean
    delete(id: number): boolean
}