// -> Exemplo 1: Optional Parameters
function cadastroUsuario(nome: string, idade: number, email: string, telefone?: number) {
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
function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || '- Usuário não conectado.');
}

mensagemLog('Atualizar página');
mensagemLog('Usuário logado', 102)

// -> Exemplo 3:
type PessoaFuncionario = {
    id: number;
    nome: string;
    idade?: number;
    email: string;
}

let pessoaFuncionario: PessoaFuncionario;

pessoaFuncionario = {
    id: 1,
    nome: 'Stiven',
    email: 'stiven@example.com'
}

console.log(pessoaFuncionario);