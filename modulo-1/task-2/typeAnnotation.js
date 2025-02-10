"use strict";
// -> Variáveis
let nome = 'Stiven Richardy';
let num = 20;
console.log(nome, ' | ', num, ' anos');
// -> Arrays
let carros = ['BMW', 'Ferrari', 'Lamborguini'];
console.log(carros);
// -> Objetos
let pessoa;
pessoa = { nome: 'Stiven', idade: 20, sexo: 'Masculino' };
console.log(pessoa);
// -> Functions
let num1 = 20;
let num2 = 30;
console.log(soma(num1, num2));
function soma(num1, num2) {
    return num1 + num2;
}
;
function multiplica(num1, num2) {
    return num1 + num2;
}
;
console.log(multiplica(10, 5));
