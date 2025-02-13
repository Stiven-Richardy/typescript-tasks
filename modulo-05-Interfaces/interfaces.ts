export {}

// -> Exemplo 1: Uso de interfaces
interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function imprimirNome(pessoa: IPessoa) {
    return `Nome: ${pessoa.nome} ${pessoa.sobrenome} | Idade: ${pessoa.idade} anos`;
}

const pessoa: IPessoa = { 
    nome: 'Stiven', 
    sobrenome: 'Richardy', 
    idade: 20 
};

console.log(imprimirNome(pessoa));

// -> Exemplo 2: Uso de interfaces com propriedades opcionais
interface ILivro {
    titulo: string;
    autor: string;
    ano: number;
    paginas?: number;
}

function imprimirLivro(livro: ILivro) {
    return `Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.ano} | Páginas: ${livro.paginas || 'Não informado'}`;
}

const livro_1: ILivro = {
    titulo: 'A Origem das Espécies',
    autor: 'Francisco Chagas',
    ano: 1955
};

const livro_2: ILivro = {
    titulo: 'O Homem que Roubava Orléans',
    autor: 'Georges Orwell',
    ano: 1984,
    paginas: 300
}

console.log(imprimirLivro(livro_1));
console.log(imprimirLivro(livro_2));

// -> Exemplo 3: Uso de interfaces com propriedades readonly
interface ICarro {
    readonly marca: string;
    readonly modelo: string;
    readonly ano: number;
    cor?: string;
}

function imprimirCarro(carro: ICarro) {
    return `Marca: ${carro.marca} | Modelo: ${carro.modelo} | Ano: ${carro.ano} | Cor: ${carro.cor || 'Não informado'}`;
}

const carro_1: ICarro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020
};

//carro_1.marca = 'Lamboguini' -> Erro
carro_1.cor = 'Preto';
console.log(imprimirCarro(carro_1));

// -> Exemplo 4: Uso de interfaces com Implements Class
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: Boolean;
    comer(tipoComida: string): void;
}

class Cachorro implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    
    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string) {
        console.log(`${this.nome} come ${tipoComida}`);
    }
}

const cachorro = new Cachorro('Pug', 5, true);
console.log(cachorro);
cachorro.comer('carne');

// -> Exemplo 5: Interfaces vs Type Alias
interface ITimes {
    nome: string;
    torcida: number;
    jogadores: number;
}

type TimesType = {
    nome: string;
    torcida: number;
    jogadores: number;
}