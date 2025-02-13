"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imprimirNome(pessoa) {
    return `Nome: ${pessoa.nome} ${pessoa.sobrenome} | Idade: ${pessoa.idade} anos`;
}
const pessoa = {
    nome: 'Stiven',
    sobrenome: 'Richardy',
    idade: 20
};
console.log(imprimirNome(pessoa));
function imprimirLivro(livro) {
    return `Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.ano} | Páginas: ${livro.paginas || 'Não informado'}`;
}
const livro_1 = {
    titulo: 'A Origem das Espécies',
    autor: 'Francisco Chagas',
    ano: 1955
};
const livro_2 = {
    titulo: 'O Homem que Roubava Orléans',
    autor: 'Georges Orwell',
    ano: 1984,
    paginas: 300
};
console.log(imprimirLivro(livro_1));
console.log(imprimirLivro(livro_2));
function imprimirCarro(carro) {
    return `Marca: ${carro.marca} | Modelo: ${carro.modelo} | Ano: ${carro.ano} | Cor: ${carro.cor || 'Não informado'}`;
}
const carro_1 = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020
};
//carro_1.marca = 'Lamboguini' -> Erro
carro_1.cor = 'Preto';
console.log(imprimirCarro(carro_1));
class Cachorro {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`${this.nome} come ${tipoComida}`);
    }
}
const cachorro = new Cachorro('Pug', 5, true);
console.log(cachorro);
cachorro.comer('carne');
//# sourceMappingURL=interfaces.js.map