export {}

//Intersection Types:
interface IDadosBancarios {
    conta: number;
    agencia: number;
    bancos: string;
}

interface ICliente {
    nome: string;
    email: string;
}

interface IDadosPessoaFisica {
    cpf: number;
}

type DadosCliente = IDadosBancarios & ICliente & IDadosPessoaFisica;

const dadosCliente: DadosCliente = {
    nome: 'Stiven',
    email: 'stiven@example.com',
    conta: 123456789,
    agencia: 123,
    bancos: 'Banco do Brasil',
    cpf: 12345678900
}

console.log(dadosCliente);