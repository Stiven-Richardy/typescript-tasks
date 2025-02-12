export {}

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
    constructor(private _nome: string, private _sobrenome: string, private _idade: number) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
    }

    retornarNome(): string {
        return `${this._nome} ${this._sobrenome}`;
    }

    apresentarPessoa(): string {
        return `Olá, meu nome é ${this.retornarNome()} e tenho ${this._idade} anos.`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, idade: number, private _cargo: string) {
        super(nome, sobrenome, idade);
        this._cargo = _cargo;
    }

    retornarNomeCargo(): string {
        return `${super.retornarNome()} | ${this._cargo}`;
    }
}

const funcionario = new Funcionario('Stiven', 'Richardy', 20, 'Analista de TI');
console.log(funcionario);
console.log(funcionario.retornarNome());
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCargo());