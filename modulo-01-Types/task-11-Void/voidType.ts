// -> Exemplo de Funções
function logErrorExample(errorMessage: string) {
    console.log(errorMessage);
}

const logError = (errorMessage: string) => {
    console.log(errorMessage);
    //return errorMessage;
};

logErrorExample('Erro na execução!');
logError('Um erro inesperado aconteceu!');

// -> Uso do void em variáveis
let variavelSemRetorno: void;

//variavelSemRetorno = 1;

variavelSemRetorno = null;
console.log(variavelSemRetorno);

variavelSemRetorno = undefined;
console.log(variavelSemRetorno);