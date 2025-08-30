// Laço com Condição (for) 

// Crie um array chamado numeros com pelo menos 10 números, misturando pares e ímpares (ex: [7, 12, 5, 20, 15, 8, 3, 22, 11, 4]).
let numeros = [3, 14, 7, 30, 17, 6, 5, 24, 13, 8];

// Usando o laço de repetição for, percorra o array.
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Dentro do laço, use uma estrutura if para verificar se o número atual é par. 
// Se o número for par, imprima-o no console.
for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 2 === 0) {
    console.log(`O número ${numeros[i]} é par`);
   } 
}