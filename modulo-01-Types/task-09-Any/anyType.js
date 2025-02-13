"use strict";
// -> Tipo Any
const tipoAny = 2025;
const tipoAny2 = ['Stiven'];
const result = tipoAny + tipoAny2;
console.log(result);
// -> Quando o tipo any é inferido implicitamente
let tipoAny3;
tipoAny3 = 'Tipo Any';
//let const tipoAny3 = 'Tipo Any';
console.log(tipoAny3);
// -> Quando devemos usar o tipo any ?
const formulario = {
    nome: 'Stiven',
    sobrenome: 'Richardy',
    idade: 20
};
console.log(formulario);
//# sourceMappingURL=anyType.js.map