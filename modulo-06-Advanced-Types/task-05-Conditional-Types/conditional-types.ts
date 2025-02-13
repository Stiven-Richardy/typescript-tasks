export {}

//Conditional Types
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

type Empresa = {
    nome: string;
    cnpj: number;
}

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
}

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça';
}

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua A',
    cidade: 'São Paulo',
    pais: 'Brasil'
}

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'avenida'
}

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// Conditional Types
type FormatoArquivos = 'png' | 'jpg' | 'jpeg' | 'pdf' | 'mp3' | 'mp4';

type FiltrarArquivoMidia<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoMidia = FiltrarArquivoMidia<FormatoArquivos>;

const arquivoAudio: ArquivoMidia = 'mp4';

console.log(arquivoAudio);