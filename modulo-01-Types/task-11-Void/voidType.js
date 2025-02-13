"use strict";
// -> Exemplo de Funções
function logErrorExample(errorMessage) {
    console.log(errorMessage);
}
const logError = (errorMessage) => {
    console.log(errorMessage);
    //return errorMessage;
};
logErrorExample('Erro na execução!');
logError('Um erro inesperado aconteceu!');
// -> Uso do void em variáveis
let variavelSemRetorno;
//variavelSemRetorno = 1;
variavelSemRetorno = null;
console.log(variavelSemRetorno);
variavelSemRetorno = undefined;
console.log(variavelSemRetorno);
//# sourceMappingURL=voidType.js.map