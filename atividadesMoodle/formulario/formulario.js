const readline = require ('readline-sync');

console.log('=============================================================');
console.log('|               Formulário Futuro Digital                   |');
console.log('|       Cadastre-se para começar sua jornada digital        |');
console.log('=============================================================\n');

console.log('>>> DADOS PESSOAIS\n')
let nome = readline.question('Digite seu nome completo: ');
let dia =readline.questionInt('Digite o dia do seu nascimento: ');
let mes = readline.questionInt('Digite o número do mês do seu nascimento (1 - 12): ');

if (mes < 1 || mes > 12) {
    console.log('Mês inválido. Digite um mês entre 1 e 12.');
}

let ano = readline.questionInt('Ano do seu nascimento: ');
let dataNascimento = `${String(dia).padStart(2,'0')}/${String(mes).padStart(2,'0')}/${ano}`
let genero = readline.question('Gênero (M- Masculino, F - Feminino, 0 - Outro): ');
let filhos = readline.question('Você tem filhos ( S - sim, N - Não): ');
let quantidade = ''
if ( filhos.toUpperCase() === 'S') {
    quantidade = readline.question('Quantos: ');
}

let especie = '';
let pet = readline.question('Você tem animais (S - Sim, N - Não): ');
if (pet.toUpperCase() === 'S') {
    especie = readline.question('Espécie: ');
} 

console.log('\n >>> ENDEREÇO \n');
let cep = readline.questionInt('CEP: ');
let rua = readline.question('Rua/avenida: ');
let numero = readline.questionInt('Número: ');
let complemento = readline.question('Complemento: ');
let bairro = readline.question('Bairro: ');
let cidade = readline.question('Cidade: ');

console.log('\n >>> CONTATO \n');       
let telefone = readline.questionInt('Número Celular: ');
let email = readline.question('Email: ');

console.log('\n================================================================');
console.log('|            Confira seus dados antes de finalizar               |');
console.log('==================================================================\n');

console.log('\n >>> DADOS PESSOAIS <<< \n')
console.log(`Nome completo: ${nome}`)
console.log(`Data Nascimento: ${dataNascimento}`);
console.log(`Gênero: ${genero}`);
console.log(`Filhos: ${filhos.toUpperCase() === 'S' ? `Sim (${quantidade })` : 'Não'}`);
console.log(`Animais: ${pet.toUpperCase() === 'S' ? `Sim (${especie})` : 'Não'}`);

console.log('\n >>> ENDEREÇO <<<\n');
console.log(`CEP: ${cep}`);
console.log(`Rua/avenida: ${rua}`);
console.log(`Número: ${numero}`);
console.log(`Complemento: ${complemento}`);
console.log(`Bairro: ${bairro}`);
console.log(`Cidade: ${cidade}`);

console.log('\n >>> CONTATO <<<\n ');
console.log(`Celular:  ${telefone}`);
console.log(`Email: ${email}`);

let finalizar = readline.question('\n Confirmar dados (S/N): ');
if (finalizar.toUpperCase() === 'S') {
    console.log('\n Tudo certo! Seus dados foram registrados com sucesso.\n');
} else {
    console.log('\n Corrigir formulário. \n')
}