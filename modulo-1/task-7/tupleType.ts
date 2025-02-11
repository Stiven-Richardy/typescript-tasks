// -> Uso simples de tuplas em Typescript
let tuplaSimples: [string, number, boolean];
tuplaSimples = ['Stiven', 20, true];
console.log(tuplaSimples);

// -> Acessando o valor da tupla
console.log(tuplaSimples[0]);

//-> Outra forma de usar tuplas em typescript (com labels)
let caracteristicaPessoa: [nome: string, idade: number, sexo: string];
caracteristicaPessoa = ['Stiven Richardy', 20, 'Masculino'];
console.log(caracteristicaPessoa);

// -> Usando tuplas com Spread Operator
let tuplaCarros: [string, ...string[]] = ['Lamborguini', 'Ferrari', 'Aston Martin'];
console.log(...tuplaCarros);

// -> Lista heterogênea de tupla
let tuplaMarcas: [number, boolean, ...string[]] = [50, true, ...tuplaCarros];
console.log(tuplaMarcas);

// -> Uso de função com tuplas
function listarNomes(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarNomes(['Stiven', 'Richardy'], [20, 35]);
console.log(resultado);

// -> Labeled tuples com Spread Operator numa função
type Nome = 
        | [nome: string, idade: number, sexo: string]
        | [nome: string, idade: number, sexo: string, profissao: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Stiven Richardy', 20, 'Masculino', 'Estagiário'));