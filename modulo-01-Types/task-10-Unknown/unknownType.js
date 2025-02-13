"use strict";
// -> Tipo unknown
let tipoUnknown;
tipoUnknown = true;
console.log(tipoUnknown);
tipoUnknown = 10;
console.log(tipoUnknown);
tipoUnknown = 'Corinthians';
console.log(tipoUnknown);
// -> Erro ao tentar atribuir um valor do tipo unknown a outros tipos
/*
let tipoUnknownTipos: unknown;

let injetarUnknownString: string = tipoUnknownTipos;
let injetarUnknownNumber: number = tipoUnknownTipos;
let injetarUnknownBoolean: boolean = tipoUnknownTipos;
let injetarUnknownAny: any[] = tipoUnknownTipos;
*/
// -> Diferença entre: any vs unknown
/*
let diferencaUnknown: unknown;
let diferencaAny: any;

console.log(diferencaAny.toFixed(2));
console.log(diferencaUnknown.toFixed(2));
*/ 
//# sourceMappingURL=unknownType.js.map