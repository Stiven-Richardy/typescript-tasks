"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 1: Uso do Get
class Quadrado {
    constructor() {
        this._lado = 5;
        this._largura = 23;
    }
    get calcularQuadrado() {
        return this._lado * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
// -> Exemplo 2: Uso do Set
class Pessoa {
    retornarNome(setNome) {
        this.nome = setNome;
    }
}
const pessoa = new Pessoa();
pessoa.nome = 'Stiven Richardy';
console.log(`Meu nome é ${pessoa.nome}`);
// -> Exemplo 3: Uso do Get aprimorado
class Estudante {
    constructor() {
        this._nome = 'Stiven Richardy';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
// -> Exemplo 4: Uso do Get e Set
class Professor {
    constructor(nome, curso) {
        this.nome = nome;
        this.curso = curso;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const professor = new Professor('Prof. Richardy', 'Engenharia de Software');
console.log(professor);
professor.curso = 'Análise e Desenvolvimento de Sistemas';
console.log(professor);
//# sourceMappingURL=getSet.js.map