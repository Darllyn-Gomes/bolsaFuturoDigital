const readline = require('readline-sync');

let nome = readline.question('Digite seu nome: ');

switch (nome) {
    case 'Darllyn':
        console.log('Olá, Darllyn!');
        break;
    case 'Daniel':
        console.log('Olá, Daniel!');
    case 'Sandra':
        console.log('Olá, Sandra!');        
        break;
    default:
        console.log('Usuário não reconhecido.');
        break;
}