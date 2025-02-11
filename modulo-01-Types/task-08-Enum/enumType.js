"use strict";
// -> Numeric Enums
var TimesBrasil;
(function (TimesBrasil) {
    TimesBrasil[TimesBrasil["Corinthians"] = 0] = "Corinthians";
    TimesBrasil[TimesBrasil["Santos"] = 1] = "Santos";
    TimesBrasil[TimesBrasil["Palmeiras"] = 2] = "Palmeiras";
})(TimesBrasil || (TimesBrasil = {}));
console.log(TimesBrasil);
// -> String Enums
var TimesArgentina;
(function (TimesArgentina) {
    TimesArgentina["BocaJuniors"] = "BOC";
    TimesArgentina["RiverPlate"] = "RIV";
    TimesArgentina["Independiente"] = "IND";
})(TimesArgentina || (TimesArgentina = {}));
console.log(TimesArgentina);
function comida(c) {
    return 'Tipos de restaurantes';
}
console.log(comida("Pizzaria" /* Restaurantes.Pizzaria */));
console.log(comida("Bistro" /* Restaurantes.Bistro */));
console.log(comida("Fastfood" /* Restaurantes.FastFood */));
// -> Quando usar o Enum ?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Concluir"] = 0] = "Concluir";
    Tarefa[Tarefa["Pendente"] = 1] = "Pendente";
    Tarefa[Tarefa["Cancelar"] = 2] = "Cancelar";
})(Tarefa || (Tarefa = {}));
const concluirTarefa = {
    id: 1,
    status: Tarefa.Pendente,
    descricao: 'Concluir tarefa',
};
if (concluirTarefa.status == Tarefa.Concluir) {
    console.log('Enviar e-mail: Tarefa concluída');
}
else {
    console.log('Enviar e-mail: Tarefa pendente');
}
//# sourceMappingURL=enumType.js.map