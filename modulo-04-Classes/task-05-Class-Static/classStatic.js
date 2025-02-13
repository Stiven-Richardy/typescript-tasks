"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 1: Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
const funcionario_01 = new Funcionario('Stiven', 'Richardy', 'Desenvolvedor');
const funcionario_02 = new Funcionario('Marcelo', 'Santana', 'Auxiliar');
console.log(Funcionario.contratacoes);
// -> Exemplo 2: Propriedades Estáticas
class Empresa {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Empresa.contratacoes++;
    }
    static retornarContratacoes() {
        return Empresa.contratacoes;
    }
}
Empresa.contratacoes = 0;
const empresa_01 = new Empresa('Stiven', 'Richardy', 'Desenvolvedor');
const empresa_02 = new Empresa('Marcelo', 'Santana', 'Auxiliar');
console.log(Empresa.retornarContratacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.totalCachorrosVendidos++;
        console.log(Cachorro.totalCachorrosVendidos);
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
}
Cachorro.totalCachorrosVendidos = 0;
const cachorro_01 = new Cachorro('Rex', 3, ['Pitbull']);
const cachorro_02 = new Cachorro('Buddy', 5, ['Pug']);
//# sourceMappingURL=classStatic.js.map