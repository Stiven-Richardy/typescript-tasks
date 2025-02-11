"use strict";
// -> Uso de colchetes
let frutas = ['Abacaxi', 'Maçã', 'Uva'];
console.log(frutas[0]);
// -> Array Object
let frutasArray = ['Morango', 'Laranja', 'Amora'];
console.log(frutasArray[1]);
// -> Adicionando mais strings com método 'push'
frutasArray.push('Melancia');
console.log(frutasArray[3]);
// -> Identificar tamanho do array
console.log(frutasArray.length);
// -> Exemplo de array com Spread Operator
let frutas2 = [...frutasArray, 'Manga', 'Pêssego'];
console.log(frutas2);
// -> Exemplo de Array com laço de iteração
function frutasListadas(frutas) {
    for (let i = 0; i < frutas.length; i++) {
        const nomeFruta = frutas[i];
        console.log(nomeFruta);
    }
}
frutasListadas(frutas2);
