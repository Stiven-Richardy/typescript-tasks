export {}

// - > Exemplo 1: Uso das Class
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
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
    idEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();
estudante.idEstudante = 388501
estudante.nomeEstudante = 'Stiven Richardy'
console.log(`Matrícula: ${estudante.idEstudante} | Nome do estudante: ${estudante.nomeEstudante}`);

// - > Exemplo 3: Uso da Class com herança
class Professor extends Pessoa {
    idProfessor: number;

    constructor(nome: string, idade: number, idProfessor: number) {
        super(nome, idade);
        this.idProfessor = idProfessor;
    }

    informaProfessor() {
        return `${this.nome} é um professor com ${this.idade} anos e matrícula ${this.idProfessor}`;
    }
}

const professor = new Professor('Maria', 40, 123456);
console.log(professor.informaProfessor());