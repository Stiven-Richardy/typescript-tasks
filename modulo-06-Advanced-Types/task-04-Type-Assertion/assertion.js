"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Assertion: as ou <>
function exibirPrecoFinal(preco, desconto, formato) {
    const precoComDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}
//const descontoFinal = exibirPrecoFinal(200, 0.65, true) as string;
const descontoFinal = exibirPrecoFinal(200, 0.65, false);
console.log(descontoFinal);
// Type Assertion
/*
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    idade: 20,
    idioma: 'Português'
};

const humanoCriado= humano as Humano;
console.log(humanoCriado.nome.toUpperCase());

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    idade: 20,
    idioma: 'Português'
};

const humanoCriado: Humano = humano;
console.log(humanoCriado.nome.toUpperCase());
*/ 
//# sourceMappingURL=assertion.js.map