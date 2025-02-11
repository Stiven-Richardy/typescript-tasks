// -> Numeric Enums
enum TimesBrasil {
    Corinthians,
    Santos,
    Palmeiras
}

console.log(TimesBrasil);

// -> String Enums
enum TimesArgentina {
    BocaJuniors = 'BOC',
    RiverPlate = 'RIV',
    Independiente = 'IND'
}

console.log(TimesArgentina);

// -> Como podemos acessar um valor de um Enum com uma chave (usando o const)
const enum Restaurantes {
    Pizzaria = 'Pizzaria',
    Bistro = 'Bistro',
    FastFood = 'Fastfood',
}

function comida (c: Restaurantes) {
    return 'Tipos de restaurantes';
}

console.log(comida(Restaurantes.Pizzaria));
console.log(comida(Restaurantes.Bistro));
console.log(comida(Restaurantes.FastFood));

// -> Quando usar o Enum ?
enum Tarefa {
    Concluir,
    Pendente,
    Cancelar,
}

const concluirTarefa = {
    id: 1,
    status: Tarefa.Pendente,
    descricao: 'Concluir tarefa',
};

if (concluirTarefa.status == Tarefa.Concluir) {
    console.log('Enviar e-mail: Tarefa concluída');
} else {
    console.log('Enviar e-mail: Tarefa pendente');
}