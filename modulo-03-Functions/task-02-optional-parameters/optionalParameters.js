"use strict";
// -> Exemplo 1: Optional Parameters
function cadastroUsuario(nome, idade, email, telefone) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Email: ${email}`);
    if (telefone) {
        console.log(`Telefone: ${telefone}`);
    }
}
cadastroUsuario('Stiven', 20, 'stiven@example.com');
cadastroUsuario('Stiven', 20, 'stiven@example.com', 13999999990);
// -> Exemplo 2:
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || '- Usuário não conectado.');
}
mensagemLog('Atualizar página');
mensagemLog('Usuário logado', 102);
let pessoaFuncionario;
pessoaFuncionario = {
    id: 1,
    nome: 'Stiven',
    email: 'stiven@example.com'
};
console.log(pessoaFuncionario);
//# sourceMappingURL=optionalParameters.js.map