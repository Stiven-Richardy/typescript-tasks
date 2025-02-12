// -> Exemplo 1: Uso do Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

console.log(descontoCompra(100));
console.log(descontoCompra(50, 0.5));

// -> Exemplo 2: 
function exibirMensagem(nome: string, saudar = 'Bem-vindo,') {
    console.log(`${saudar} ${nome}!`);
}

exibirMensagem('Stiven');
exibirMensagem('Stiven', 'Boas-vindas,');

// -> Exemplo 3:
function exibirNome(nome: string, sobrenome = 'Richardy') {
    console.log(`${nome} ${sobrenome}!`);
}

const resultadoNome = exibirNome('Stiven');
const resultadoTeste = exibirNome('Stiven', undefined);
//const resultadoErro = exibirNome('Stiven', 2025);