"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 1: Uso das heranças com funções
class Animal {
    mover(distancia = 0) {
        console.log(`O animal se move ${distancia} metros.`);
    }
}
class Cachorro extends Animal {
    latir() {
        console.log('Au, au!');
    }
}
const cachorro = new Cachorro();
cachorro.mover(5);
cachorro.latir();
// -> Exemplo 2: 
class Pessoa {
    constructor(_nome, _sobrenome, _idade) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
    }
    retornarNome() {
        return `${this._nome} ${this._sobrenome}`;
    }
    apresentarPessoa() {
        return `Olá, meu nome é ${this.retornarNome()} e tenho ${this._idade} anos.`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, idade, _cargo) {
        super(nome, sobrenome, idade);
        this._cargo = _cargo;
        this._cargo = _cargo;
    }
    retornarNomeCargo() {
        return `${super.retornarNome()} | ${this._cargo}`;
    }
}
const funcionario = new Funcionario('Stiven', 'Richardy', 20, 'Analista de TI');
console.log(funcionario);
console.log(funcionario.retornarNome());
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCargo());
//# sourceMappingURL=herancas.js.map