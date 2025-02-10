// -> Variáveis
let nome: string = 'Stiven Richardy';
let num: number = 20;
console.log(nome, ' | ', num, ' anos');

// -> Arrays
let carros: string[] = ['BMW', 'Ferrari', 'Lamborguini'];
console.log(carros);

// -> Objetos
let pessoa: {
    nome: string;
    idade: number;
    sexo: string
};
pessoa = {nome: 'Stiven', idade: 20, sexo: 'Masculino'};
console.log(pessoa);

// -> Functions
let num1: number = 20;
let num2: number = 30;
console.log(soma(num1, num2));
function soma (num1: number, num2: number) {
    return num1 + num2;
};

function multiplica (num1: number, num2: number) {
    return num1 + num2;
};
console.log(multiplica(10, 5));