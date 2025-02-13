export {};

// -> Exemplo 1: Propriedades Estáticas
class Funcionario {
    static contratacoes = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario('Stiven', 'Richardy', 'Desenvolvedor');
const funcionario_02 = new Funcionario('Marcelo', 'Santana', 'Auxiliar');
console.log(Funcionario.contratacoes);

// -> Exemplo 2: Propriedades Estáticas
class Empresa {
    private static contratacoes = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        Empresa.contratacoes++;
    }

    public static retornarContratacoes() {
        return Empresa.contratacoes;
    }
}

const empresa_01 = new Empresa('Stiven', 'Richardy', 'Desenvolvedor');
const empresa_02 = new Empresa('Marcelo', 'Santana', 'Auxiliar');
console.log(Empresa.retornarContratacoes());

// -> Exemplo 3: Métodos Estáticos
type Raca = 'Pitbull' | 'Pug' | 'Pinscher' | 'Salsicha';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static totalCachorrosVendidos = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.totalCachorrosVendidos++;
        console.log(Cachorro.totalCachorrosVendidos);
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
}

const cachorro_01 = new Cachorro('Rex', 3, ['Pitbull']);
const cachorro_02 = new Cachorro('Buddy', 5, ['Pug']);