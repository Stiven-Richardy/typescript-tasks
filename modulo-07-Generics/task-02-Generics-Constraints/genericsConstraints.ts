export {}

// Generics Constraints
interface Carro {
    marca: string;
    ano: number;
}

function getCarro<T extends Carro>(marca: T[], ano: number): T[] {
    return marca.filter(marca => marca.ano > ano);
}

const carros: Carro[] = [
    { marca: 'Ford', ano: 2020 },
    { marca: 'Chevrolet', ano: 2015 },
    { marca: 'Fiat', ano: 2010 },
    { marca: 'Honda', ano: 2025 }
]

console.log(getCarro(carros, 2019));

// Generics Constraints pt. 2
function juntarObjetos<T extends object, S extends object>(objeto1: T, objeto2: S) {
    return {
        ...objeto1,
       ...objeto2
    }
}

const objeto1 = juntarObjetos(
    { nome: 'Stiven' },
    { cidade: 'São Paulo' }
);

/* Erro nos argumentos informados
const objeto2 = juntarObjetos(
    { nome: 'Stiven' },
    'São Paulo'
);
*/

console.log(objeto1);


// Generics Constraints pt. 3
function prop<A, B extends keyof A>(objeto: A, chave: B) {
    return objeto[chave];
}

const pessoa = prop(
    { nome: 'Stiven' },
    'nome'
)

console.log(pessoa);