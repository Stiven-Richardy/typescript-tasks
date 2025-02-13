export {}

// Type Casting: as
const nome: unknown = 'Stiven Richardy';
console.log((nome as string).toString());
console.log(typeof nome);

//Type Casting: <>
const carro = 'Lamborguini';
const tamanhoString: number = (<string>carro).length;
console.log(tamanhoString);