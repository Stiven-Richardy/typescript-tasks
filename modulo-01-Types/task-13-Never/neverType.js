"use strict";
// -> Exemplo de uso do Never
const error = (message) => {
    throw new Error(message);
};
console.log(error('Ocorreu um erro na execução'));
// -> Exemplo de never inferido automaticamente
const rejectMessage = () => {
    return error('Deu erro!');
};
console.log(rejectMessage());
// -> Função que contém um loop infinito retorna o tipo Never
/*
const loopInfinito = () => {
    while (true) {
        console.log("Loop Infinito");
    }
};

console.log(loopInfinito());
*/
// -> Diferença entre Never vs Void
//const verificaNever: never = null;
const verificaVoid = null;
//console.log(verificaNever);
console.log(verificaVoid);
//# sourceMappingURL=neverType.js.map