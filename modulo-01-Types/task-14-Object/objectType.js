"use strict";
// -> Exemplo 1: Uso básico do tipo Object
const objectBasico = {
    nome: 'Stiven',
    sobrenome: 'Richardy',
    idade: 20,
    cidade: 'São Paulo',
    pais: 'Brasil'
};
console.log(objectBasico);
// -> Exemplo 2: Object como parâmetros de função
function objectFunction(funcionario) {
    return 'Seja bem-vindo ' + funcionario.nome;
}
console.log(objectFunction({ nome: 'Stiven Richardy' }));
function objectFunctionNomeado(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome +
        '! Sua função na empresa será ' + pessoa.funcao;
}
console.log(objectFunctionNomeado({ nome: 'Stiven Richardy', funcao: 'Estagiário em Desenvolvimento' }));
function objectFunctionComInterface(funcionario) {
    return 'Seja bem-vindo ' + funcionario.nome +
        '! Sua função na empresa será ' + funcionario.funcao +
        '! Empresa: ' + funcionario.empresa;
}
console.log(objectFunctionComInterface({ nome: 'Stiven Richardy', funcao: 'Estagiário em Desenvolvimento', empresa: 'Microsoft' }));
function objectFunctionOptional(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome +
        (pessoa.sobrenome ? ' | sobrenome ' + pessoa.sobrenome : '') +
        ' | idade: ' + pessoa.idade +
        (pessoa.cidade ? ' | cidade: ' + pessoa.cidade : '') +
        (pessoa.pais ? ' | país: ' + pessoa.pais : '');
}
console.log(objectFunctionOptional({ nome: 'Stiven', idade: 20, pais: 'Brasil' }));
function objectFunctionReadOnly(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome +
        ' | sobrenome: ' + pessoa.sobrenome +
        ' | idade: ' + pessoa.idade +
        ' | país: ' + pessoa.pais;
}
console.log(objectFunctionReadOnly({ nome: 'Stiven', sobrenome: 'Richardy', idade: 20, pais: 'Brasil' }));
const carro = {
    nome: 'BMW',
    ano: 2025,
    pais: 'Alemanha',
    cor: 'Azul'
};
console.log(carro);
const usuario = {
    nome: 'Stiven',
    email: 'richardy@gmail.com'
};
const admin = {
    nome: 'Stiven',
    email: 'richardy@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
//# sourceMappingURL=objectType.js.map