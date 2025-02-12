export {}

// -> Exemplo 1: Modificador Public
class Professor {
    matricula: number;
    nome: string;

    constructor(matricula: number, nome: string){
        this.matricula = matricula;
        this.nome = nome;
    }

    informaProfessor(): void{
        console.log(`Nome: ${this.nome} | Matrícula: ${this.matricula}`);
    }
}

const professor = new Professor(5210, 'Juliana de Deus');
professor.informaProfessor();

// -> Exemplo 2: Modificador Private
class Administrador {
    private matricula: number;
    nome: string;

    constructor(matricula: number, nome: string){
        this.matricula = matricula;
        this.nome = nome;
    }

    informaAdministrador() {
        return `Nome: ${this.nome} | Matrícula: ${this.matricula}`;
    }
}

const administrador = new Administrador(5220, 'José de Fátima');
console.log(administrador.informaAdministrador());
//console.log(administrador.matricula); Erro de private

// -> Exemplo 3: Modificador Protected
class Pessoa {
    nome: string;
    idade: number;
    protected sexo: string;

    constructor(nome: string, idade: number, sexo: string){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

class Aluno extends Pessoa {
    matricula: number;

    constructor(nome: string, idade: number, sexo: string, matricula: number){
        super(nome, idade, sexo);
        this.matricula = matricula;
    }

    imprimeInformacoes() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} | Sexo: ${this.sexo}`);
    }
}

const aluno = new Aluno('Maria', 20, 'Feminino', 1234);
aluno.imprimeInformacoes();
//console.log(aluno.sexo); Erro de protected

// -> Exemplo 4: Modificador Readonly
class Livro {
    readonly titulo: string;
    readonly autor: string;
    readonly ano: number;

    constructor(titulo: string, autor: string, ano: number){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    imprimeLivro() {
        console.log(`Título: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`);
    }
}

const livro = new Livro('A Origem das Espécies', 'Francisco Chagas', 1955);
//livro.ano = 1582; Erro de readonly
livro.imprimeLivro();