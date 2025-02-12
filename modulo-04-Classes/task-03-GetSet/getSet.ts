export {}

// -> Exemplo 1: Uso do Get
class Quadrado {
    private _lado = 5;
    private _largura = 23;

    get calcularQuadrado() {
        return this._lado * this._largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// -> Exemplo 2: Uso do Set
class Pessoa {
    nome: string;

    retornarNome(setNome: string) {
        this.nome = setNome;
    }
}

const pessoa = new Pessoa();
pessoa.nome = 'Stiven Richardy';
console.log(`Meu nome é ${pessoa.nome}`);

// -> Exemplo 3: Uso do Get aprimorado
class Estudante {
    private _nome = 'Stiven Richardy';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

// -> Exemplo 4: Uso do Get e Set
class Professor {
    nome: string;
    curso: string;

    constructor(nome: string, curso: string) {
        this.nome = nome;
        this.curso = curso;
    }

    public get cursos() {
        return this.curso;
    }

    public set cursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const professor = new Professor('Prof. Richardy', 'Engenharia de Software');
console.log(professor);


professor.curso = 'Análise e Desenvolvimento de Sistemas';
console.log(professor);