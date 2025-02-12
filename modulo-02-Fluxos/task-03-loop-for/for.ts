// -> Exemplo 1: Uso do For
let nomes: string[] = ['Alice', 'Bob', 'Carol'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// -> Exemplo 2: Uso do For...of
for (let i of nomes) {
    console.log(i);
}

// -> Exemplo 3: Uso do For...in
for (let i in nomes) {
    console.log(nomes[i]);
}

// -> Exemplo 4: Uso do For...of com Array Object
const numeros: Array<number> = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero);
}

// -> Exemplo 5: Uso do Foreach
nomes.forEach(function(nome) {
    console.log(nome);
});