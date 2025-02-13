"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirTipe(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos');
}
console.log(exibirTipe(5, 10));
console.log(exibirTipe('Bom ', 'dia'));
//console.log(exibirTipe(11, 'Erro'));
//Type Guard: instanceof
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
class Moto {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return `Carro -> Marca: ${veiculo.marca} | Modelo: ${veiculo.modelo}`;
    }
    if (veiculo instanceof Moto) {
        return `Moto -> Marca: ${veiculo.marca} | Modelo: ${veiculo.ano}`;
    }
    throw new Error('Argumento inválido');
}
const carro = new Carro('Ford', 'Mustang');
const moto = new Moto('Honda', 2025);
console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPassaro) {
        this.grupo = grupo;
        this.corPassaro = corPassaro;
    }
}
function nadar(grupo) {
    console.log(`O grupo ${grupo} está nadando!`);
}
function voar(grupo) {
    console.log(`O grupo ${grupo} está voando!`);
}
function movimentar(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPassaro' in animal) {
        voar(animal.grupo);
    }
}
movimentar(new Peixe('Peixe', 'Azul'));
movimentar(new Passaro('Pássaro', 'Branco'));
//# sourceMappingURL=guards.js.map