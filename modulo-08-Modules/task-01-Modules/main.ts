import { ZipCodeValidator, EmailValidator, somar, subtrair, multiplicar, dividir } from './validators';

// Importando as funções de soma, subtração, multiplicação e divisão
console.log(somar(5, 7));
console.log(subtrair(15, 2));
console.log(multiplicar(10, 20));
console.log(dividir(20, 15));

// Importando o E-mail Validator
let email = 'stiven@example.com'
let validator = new EmailValidator();
console.log(validator.isValid(email));

// Importando o ZipCode Validator
let zipCode = '12345-678'
let zipCodeValidator = new ZipCodeValidator();
console.log(zipCodeValidator.isValid(zipCode));