const readline = require('readline-sync');

let numero1 = readline.questionInt('Digite o primeiro número: ');
let numero2 = readline.questionInt('Digite o segundo número: ');
let operador = readline.question('Digite a operação (+, -, *, /): ');

switch (operador) {
    case '+':
    console.log(`Resultado: ${numero1 + numero2}`);
        break;
    case '-':
    console.log(`Resultado: ${numero1 - numero2}`);
        break;
    case '*':           
    console.log(`Resultado: ${numero1 * numero2}`);
        break;
    case '/':
        if (numero2 === 0) {
            console.log('Erro: Divisão por zero não é permitida.');
            break; 
        } else {
            console.log('Resultado: ' + (numero1 / numero2));
            break;
        }
    default:
    console.log('Operador inválido. Por favor, use +, -, * ou /.');
            break;
}
