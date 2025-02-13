export {}

//Type Guard: TypeOf
type alfanumerico = string | number;

function exibirTipe (a: alfanumerico, b: alfanumerico) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a ==='string' && typeof b ==='string') {
        return a.concat(b);
    }

    throw new Error('Argumentos inválidos');
}

console.log(exibirTipe(5, 10));
console.log(exibirTipe('Bom ', 'dia'));
//console.log(exibirTipe(11, 'Erro'));

//Type Guard: instanceof
class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Moto {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
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

//Type Guard: In
interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPassaro: string;

    constructor(grupo: string, corPassaro: string) {
        this.grupo = grupo;
        this.corPassaro = corPassaro;
    }
}

function nadar(grupo: string) {
    console.log(`O grupo ${grupo} está nadando!`);
}

function voar(grupo: string) {
    console.log(`O grupo ${grupo} está voando!`);
}

function movimentar(animal: Animal) {
    if('corPeixe' in animal) {
        nadar((animal as Peixe).grupo);
    } else if('corPassaro' in animal) {
        voar((animal as Passaro).grupo);
    }
}

movimentar(new Peixe('Peixe', 'Azul'));
movimentar(new Passaro('Pássaro', 'Branco'));