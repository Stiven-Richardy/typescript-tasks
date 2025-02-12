// -> Exemplo 1: Uso básico do tipo Object
const objectBasico = {
    nome: 'Stiven',
    sobrenome: 'Richardy',
    idade: 20,
    cidade: 'São Paulo',
    pais: 'Brasil'
}

console.log(objectBasico);

// -> Exemplo 2: Object como parâmetros de função
function objectFunction(funcionario: { nome: string }) {
    return 'Seja bem-vindo ' + funcionario.nome
}

console.log(objectFunction({ nome: 'Stiven Richardy' }));

// -> Exemplo 3: Object nomeados
interface Pessoa {
    nome: string;
    funcao: string;
}

function objectFunctionNomeado(pessoa: Pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome + 
    '! Sua função na empresa será ' + pessoa.funcao
}

console.log(objectFunctionNomeado({ nome: 'Stiven Richardy', funcao: 'Estagiário em Desenvolvimento'}));

// -> Exemplo 4: Object como type alias (usando interface)
type Funcionario = {
    nome: string;
    funcao: string;
    empresa: string;
};

function objectFunctionComInterface(funcionario: Funcionario) {
    return 'Seja bem-vindo '+ funcionario.nome + 
    '! Sua função na empresa será '+ funcionario.funcao +
    '! Empresa: '+ funcionario.empresa;
}

console.log(objectFunctionComInterface({ nome: 'Stiven Richardy', funcao: 'Estagiário em Desenvolvimento', empresa: 'Microsoft'}));

// -> Exemplo 5: Usando optional no Object
interface PessoaOptional {
    nome: string;
    sobrenome?: string;
    idade: number;
    cidade?: string;
    pais?: string;
}

function objectFunctionOptional(pessoa: PessoaOptional) {
    return 'Seja bem-vindo '+ pessoa.nome + 
    (pessoa.sobrenome? ' | sobrenome '+ pessoa.sobrenome : '') +
    ' | idade: '+ pessoa.idade +
    (pessoa.cidade? ' | cidade: '+ pessoa.cidade : '') +
    (pessoa.pais? ' | país: '+ pessoa.pais : '');
}

console.log(objectFunctionOptional({ nome: 'Stiven', idade: 20, pais: 'Brasil'}));

// -> Exemplo 6: Propriedade 'readonly'
interface PessoaReadOnly {
    readonly nome: string;
    sobrenome: string;
    idade: number;
    pais: string;
}

function objectFunctionReadOnly(pessoa: PessoaReadOnly) {
    return 'Seja bem-vindo '+ pessoa.nome + 
    ' | sobrenome: '+ pessoa.sobrenome +
    ' | idade: '+ pessoa.idade +
    ' | país: '+ pessoa.pais;
}

console.log(objectFunctionReadOnly({ nome: 'Stiven', sobrenome: 'Richardy', idade: 20, pais: 'Brasil'}));

// -> Exemplo 7: Tipos de extensões
interface Marca {
    nome: string;
}

interface Modelo {
    ano: number;
    pais: string;
}

interface Carro extends Marca, Modelo {
    cor: string;
}

const carro: Carro = {
    nome: 'BMW',
    ano: 2025,
    pais: 'Alemanha',
    cor: 'Azul'
}

console.log(carro);

// -> Exemplo 8: Tipos de interseções
interface Cachorro {
    raca: string;
    cor: string;
}

interface Gato {
    raca: string;
    idade: number;
}

type Animal = Cachorro & Gato;

// -> Exemplo 9: Generic Objects
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Stiven',
    email: 'richardy@gmail.com'
}

const admin: Admin = {
    nome: 'Stiven',
    email: 'richardy@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));