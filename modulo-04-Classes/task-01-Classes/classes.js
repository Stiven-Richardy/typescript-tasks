"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// - > Exemplo 1: Uso das Class
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    informaIdade() {
        return `${this.nome} tem ${this.idade} anos`;
    }
}
const pessoa = new Pessoa('Stiven', 20);
console.log(pessoa.informaIdade());
// - > Exemplo 2: Uso da Class sem construtor
class Estudante {
}
const estudante = new Estudante();
estudante.idEstudante = 388501;
estudante.nomeEstudante = 'Stiven Richardy';
console.log(`Matrícula: ${estudante.idEstudante} | Nome do estudante: ${estudante.nomeEstudante}`);
// - > Exemplo 3: Uso da Class com herança
class Professor extends Pessoa {
    constructor(nome, idade, idProfessor) {
        super(nome, idade);
        this.idProfessor = idProfessor;
    }
    informaProfessor() {
        return `${this.nome} é um professor com ${this.idade} anos e matrícula ${this.idProfessor}`;
    }
}
const professor = new Professor('Maria', 40, 123456);
console.log(professor.informaProfessor());
//# sourceMappingURL=classes.js.map