export class Empleado {
    public _idtrabajadores: number;
    public _name: string;
    public _lastName: string;
    public _age: number;

    constructor(idtrabajadores: number, name: string, lastName: string, age: number) {
        this._idtrabajadores = idtrabajadores;
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }

    get idTrabajadores(): number {
        return this._idtrabajadores;
    }

    set idTrabajadores(idtrabajadores: number) {
        this._idtrabajadores = idtrabajadores;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }
}
