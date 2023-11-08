export class Empleado {
    public _idtrabajadores: number = -1;
    public _name: string;
    public _lastName: string;
    public _age: number;
    public _email: string;
    public _password : string;

    constructor(name: string, lastName: string, age: number) {
      
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

    get email(): string {
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string){
        this._password = password;
    }
}
