"use strict";
// -> Uso simples de tuplas em Typescript
let tuplaSimples;
tuplaSimples = ['Stiven', 20, true];
console.log(tuplaSimples);
// -> Acessando o valor da tupla
console.log(tuplaSimples[0]);
//-> Outra forma de usar tuplas em typescript (com labels)
let caracteristicaPessoa;
caracteristicaPessoa = ['Stiven Richardy', 20, 'Masculino'];
console.log(caracteristicaPessoa);
// -> Usando tuplas com Spread Operator
let tuplaCarros = ['Lamborguini', 'Ferrari', 'Aston Martin'];
console.log(...tuplaCarros);
// -> Lista heterogênea de tupla
let tuplaMarcas = [50, true, ...tuplaCarros];
console.log(tuplaMarcas);
// -> Uso de função com tuplas
function listarNomes(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarNomes(['Stiven', 'Richardy'], [20, 35]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Stiven Richardy', 20, 'Masculino', 'Estagiário'));
//# sourceMappingURL=tupleType.js.map