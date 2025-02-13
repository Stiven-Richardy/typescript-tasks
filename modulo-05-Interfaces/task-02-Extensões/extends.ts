export {}

// Exemplo 1: Interfaces com extensões
interface IPessoa {
    nome: string;
    idade: number;
}

interface IEndereco {
    cep: string;
    logradouro: string;
    numero: number;
}

interface IUsuario extends IPessoa, IEndereco {
    email: string;
}

const usuario: IUsuario = {
    nome: 'John Doe',
    idade: 30,
    cep: '12345-678',
    logradouro: 'Rua Teste',
    numero: 123,
    email: 'johndoe@example.com'
}

console.log(usuario);

// Exemplo 2: Uso do Omit
interface IFuncionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<IFuncionario, 'id'> {
    id: string;
    LinguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: '123',
    nome: 'John Doe',
    salario: 5000,
    LinguagemProgramacao: 'TypeScript'
}

console.log(desenvolvedor);