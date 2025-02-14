export {}

// Generics Classes
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

const box = new Box('Stiven Richardy');
console.log(box.getValue());

// Generics Classes pt. 2
class Estudante<S, T> {
    private _id: S;
    private _nome: T;

    setValor(id: S, nome: T): void {
        this._id = id;
        this._nome = nome;
    }

    retornarValor(): void {
        console.log(`ID: ${this._id} | Nome: ${this._nome}`);
    }
}

const estudante = new Estudante<number, string>();
estudante.setValor(388501, 'Stiven Richardy');
estudante.retornarValor();