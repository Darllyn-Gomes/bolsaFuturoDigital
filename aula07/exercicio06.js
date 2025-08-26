// Construção de Tabuada 

// Usando laços de repetição aninhados (um laço for dentro de outro), crie um programa que imprima as tabuadas de multiplicação do número 2 até o número 9.

let tabuada = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < tabuada.length; i++){
    let numero = tabuada[i];

for (let d = 1; d <= 10; d++) {
    console.log(`${numero} x ${d} = ${numero * d}`);
}

}

// O programa deve imprimir cada tabuada em uma linha separada, começando de [número] x 1 até [número] x 10.

tabuada = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < tabuada.length; i++){
    let numero = tabuada[i];
    let linha = `Tabuada do ${numero}: `;

for (let d = 1; d <= 10; d++) {
    linha += `${numero} x ${d} = ${numero * d}`;
    if (d <10) linha += '|';
}
console.log(linha);

}