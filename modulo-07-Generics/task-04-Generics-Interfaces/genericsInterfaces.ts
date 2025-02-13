export {}

// Generics Interfaces
interface IPessoa<T, U> {
    nome: T;
    idade: U;
}

const pessoaGenerica: IPessoa<string, number> = {
    nome: 'Stiven',
    idade: 31
};

console.log(pessoaGenerica);

// Generics Interfaces pt. 2
interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
};

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};

    response.headers.forEach((value, key) => {
        headers[key] = value;
    })

    const data = await response.json();
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    };
};

(async () => {
    const response = await fetchJson<{ completed: boolean }>('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data.completed);
})();