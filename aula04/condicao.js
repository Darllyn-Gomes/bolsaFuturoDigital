const readline = require('readline-sync');

let ano = readline.questionInt('Digite o ano do seu nascimento');
let idade = 2025 - ano;

if (idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}