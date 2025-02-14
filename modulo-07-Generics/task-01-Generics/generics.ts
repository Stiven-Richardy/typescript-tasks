export {}

// Generics 
function retornarElementosRandomicos<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

const numeros: number[] = [1, 2, 3, 4, 5];
console.log(retornarElementosRandomicos(numeros));

const strings: string[] = ['a', 'b', 'c', 'd', 'e'];
console.log(retornarElementosRandomicos(strings));

// Generics pt. 2
function retornarElementos<T>(items: T[]): void {
    items.forEach(elemento => {
        console.log(elemento);
    });
}

const numeros2: number[] = [1, 2, 3, 4, 5];
retornarElementos(numeros2);

const strings2: string[] = ['a', 'b', 'c', 'd', 'e'];
retornarElementos(strings2);