// -> Exemplo 1: Functions
function somaNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(somaNumeros(5, 10));

// -> Exemplo 2: Função anônima
const saudar = function (mensagem: string) {
    return mensagem;
}

console.log(saudar('Seja bem-vindo!'));

// -> Exemplo 3: Arrow Functions
const multiplicaNumeros = (num1: number, num2: number) => {
    return num1 * num2;
}

console.log(multiplicaNumeros(5, 10));

// -> Exemplo 4: Function constructor
const divideNumeros = new Function('num1', 'num2', 'return num1 / num2');

console.log(divideNumeros(5, 10));