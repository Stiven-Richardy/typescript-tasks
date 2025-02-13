export {}

// Mapped Type
type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

type UsuarioOptional = {
    [K in keyof Usuario]?: Usuario[K];
}

const usuario: UsuarioOptional = {
    nome: 'Stiven',
}

console.log(usuario);

// Outros tipos avançados
interface ILivro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigo = Omit<ILivro, 'numeroPaginas'>;

type LivroType = Readonly<ILivro>;

const livro: LivroType = {
    titulo: 'A Origem das Espécies',
    autor: 'Francisco Chagas',
    preco: 25.99,
    numeroPaginas: 300,
};

//livro.titulo = 'Teste';