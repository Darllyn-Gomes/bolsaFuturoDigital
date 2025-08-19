const readline = require ('readline-sync');

let ano = readline.questionInt('Digite o ano que você nasceu: ');
let idade = 2025 - ano;
console.log(`A sua idade é ${idade}`);

if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade')
}
