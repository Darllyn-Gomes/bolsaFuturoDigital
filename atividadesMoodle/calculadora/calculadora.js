const readline = require ('readline-sync');

console.log(`=========================================`)
console.log(`|         Calculadora -  CalcD          |`)
console.log(`=========================================\n`);

while (true) {

let numero1 = readline.questionFloat('Digite o primeiro número: ');
let numero2 = readline.questionFloat('Digite o segundo número: ');
let operador = readline.question('Escolha o operador (+, -, *, /): ').trim();

switch(operador) {
    case '+':
        console.log(`\n>>> A soma de ${numero1} + ${numero2} = ${numero1 + numero2}\n`);
        break;
    case '-':
        console.log(`\n>>> A subtração de ${numero1} - ${numero2} = ${numero1 - numero2}\n`);    
        break;
    case '*':
        console.log(`\n>>> A multiplicação de ${numero1} * ${numero2} = ${numero1 * numero2}\n`);
        break;
    case '/':
        if (numero2 === 0) {
            console.log('[ERRO] Operação inválida. Divisão por zero');
        } else {
            console.log(`\n>>> A divisão entre ${numero1} / ${numero2} = ${numero1 / numero2}\n`);
        }  
        break;
        default:
            console.log('\n>>> Operador inválido. Tente novamente.\n');

}

let continuar = readline.question('Deseja continuar (S/N): ').trim().toLowerCase();
if (continuar !== 's') {
    console.log('\n>>> Obrigado por usar a CalcD! Até a próxima. <<<\n');
    break;
}

}