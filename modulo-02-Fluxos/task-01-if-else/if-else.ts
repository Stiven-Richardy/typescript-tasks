// -> Exemplo 1: Uso do If
const pi = 3.14;

if (pi > 3) {
    console.log('O valor de PI é maior que 3');
}

// -> Exemplo 2: Uso do If...Else
const euler = 2.72;

if (euler > 2) {
    console.log('O valor de Euler é maior que 2');
} else {
    console.log('O valor de Euler é menor ou igual a 2');
}

// -> Exemplo 3: Calcular IMC com If..Else
const peso = 75;
const altura = 1.75;

const imc = peso / (altura ** 2);

if (imc >= 30) {
    console.log('Você está acima do peso');
} else if (imc >= 25) {
    console.log('Você está com o peso ideal');
} else if (imc >= 18.5) {
    console.log('Você está com o peso normal');
} else {
    console.log('Você está abaixo do peso');
}

// -> Exemplo 4: Ternário
const numero = 10;

const resultTernario = (numero > 5) ? 'O número é maior que 5' : 'O número é menor ou igual a 5';
console.log(resultTernario);