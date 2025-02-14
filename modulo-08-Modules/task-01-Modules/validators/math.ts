export function somar(x: number, y: number): number {
    return x + y;
}

export function subtrair(x: number, y: number): number {
    return x - y;
}

export function multiplicar(x: number, y: number): number {
    return x * y;
}

export function dividir(x: number, y: number): number {
    if (y === 0) {
        throw new Error('Não é possível dividir por zero');
    }
    return x / y;
}