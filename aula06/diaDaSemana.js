const readline = require ('readline-sync');

let dia = readline.questionInt('Digite o número do dia da semana (1-7): ');

switch(dia) {
    case 1:
    console.log('Domingo');
        break
    case 2:
    console.log('Segunda-feira');
        break;
    case 3:
    console.log('Terça-feira');
        break;
     case 4:
    console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
    console.log('Sexta-feira');
        break;
    case 7:
            console.log('Sábado');
        break;
    default:
    console.log('Número inválido! Por favor, insira um número entre 1 e 7.');
        break;
}