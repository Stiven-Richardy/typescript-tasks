"use strict";
// ->: Exemplo 1: Uso do Rest Parameters
function soma(...numeros) {
    let total = 0;
    numeros.forEach((num) => (total += num));
    return total;
}
console.log(soma(1, 2, 3, 4, 5));
// -> Exemplo 2:
function concatenarStrings(...strings) {
    return strings.join(' ');
}
console.log(concatenarStrings('Hello', 'World', '!'));
// -> Exemplo 3:
function calcularMedia(...notas) {
    if (notas.length === 0) {
        return 0;
    }
    let total = 0;
    notas.forEach((nota) => (total += nota));
    return total / notas.length;
}
console.log(calcularMedia(7, 8, 9, 10));
// -> Exemplo 4:
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de Informática disponíveis no estoque: ');
departamentoInformatica.exibirProdutos('Teclado', 'Mouse', 'Monitor', 'Mousepad');
//# sourceMappingURL=restParameters.js.map