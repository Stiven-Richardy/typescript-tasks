"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 1: 
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    ;
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `Olá, ${this.retornarNomeCompleto}! Seu salário é ${this.retornarSalario()}.`;
    }
}
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const funcionarioCLT = new FuncionarioCLT('Stiven', 'Richardy', 1200);
const funcionarioPJ = new FuncionarioPJ('Stiven', 'Richardy', 150, 360);
console.log(funcionarioCLT.emitirContraCheque());
console.log(funcionarioPJ.emitirContraCheque());
//# sourceMappingURL=classAbstract.js.map