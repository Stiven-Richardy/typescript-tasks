export {};

// Satisfies Operator
type Cidade = NomeCidade | CidadeCoordenada;

type NomeCidade = 'São Paulo' | 'Rio de Janeiro' | 'Belo Horizonte';

type CidadeCoordenada = {
    x: number;
    y: number;
}

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
}

const pessoa = {
    localNascimento: 'São Paulo',
    residenciaAtual: {
        x: -23.5505,
        y: -46.6333
    }
} satisfies Pessoa

console.log(pessoa.localNascimento.toUpperCase());

// Satisfies Operator
type Connection = {};

declare function CreateConnection(host: string, port: string, reconnect: boolean, poolsize: number): Connection;

type Configuration = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSizer?: number;
}

const config = {
    host: 'localhost',
    port: 3306,
    tryReconnect: () => true
} satisfies Configuration

function Connect() {
    let { host, port, tryReconnect } = config;

    CreateConnection(host, `${port}`, tryReconnect(), 10)
}