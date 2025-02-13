export {}

// -> Exemplo 1: 
abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {};

    abstract retornarSalario() : number;

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `Olá, ${this.retornarNomeCompleto}! Seu salário é ${this.retornarSalario()}.`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const funcionarioCLT = new FuncionarioCLT('Stiven', 'Richardy', 1200);
const funcionarioPJ = new FuncionarioPJ('Stiven', 'Richardy', 150, 360);

console.log(funcionarioCLT.emitirContraCheque());
console.log(funcionarioPJ.emitirContraCheque());