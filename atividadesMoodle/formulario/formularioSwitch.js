const readline = require ('readline-sync');
                                                                                            
console.log('===============================================================');          // ESTUDO DE ESTRUTURA SWITCH
console.log('|                  Formulário Futuro Digital                  |');          
console.log('|       Cadastre-se para começar sua jornada digital          |');
console.log('===============================================================\n');

console.log('Escolha uma opção: \n');
console.log('[1] - Iniciar cadastro');
console.log('[2] - Ver informações');
console.log('[3] - Sair');


let opcoes = readline.questionInt('Digite o número da opção desejada: ');

let nome = '', dia = '', mes = '', ano = '', dataNascimento = '', genero = '', filhos = '', quantidade = '', especie = '', pet = '';
let cep = '', rua = '', numero = '', complemento = '', bairro = '', cidade = '';
let telefone = '', email = '';

switch (opcoes) {
    case 1:
        console.log('\n >>> DADOS PESSOAIS\n')
        nome = readline.question('Digite seu nome completo: ');
        dia =readline.questionInt('Digite o dia do seu nascimento: ');
        mes = readline.questionInt('Digite o número do mês do seu nascimento (1 - 12): ');
        
        if (mes < 1 || mes > 12) {
            console.log('Mês inválido. Digite um mês entre 1 e 12.');
        }
        
        ano = readline.questionInt('Ano do seu nascimento: ');
        dataNascimento = `${String(dia).padStart(2,'0')}/${String(mes).padStart(2,'0')}/${ano}`
        genero = readline.question('Gênero (M- Masculino, F - Feminino, 0 - Outro): ');
        filhos = readline.question('Você tem filhos ( S - sim, N - Não): ');
        
        if ( filhos.toUpperCase() === 'S') {
            quantidade = readline.question('Quantos: ');
        }
        
        pet = readline.question('Você tem animais (S - Sim, N - Não): ');
        if (pet.toUpperCase() === 'S') {
            especie = readline.question('Espécie: ');
        } 
        
        console.log('\n >>> ENDEREÇO \n');
        cep = readline.questionInt('CEP: ');
        rua = readline.question('Rua/avenida: ');
        numero = readline.question('Número: ');
        complemento = readline.question('Complemento: ');
        bairro = readline.question('Bairro: ');
        cidade = readline.question('Cidade: ');
        
        console.log('\n >>> CONTATO \n');       
        telefone = readline.questionInt('Número Celular: ');
        email = readline.question('Email: ');
        console.log('\n Cadastro realizado com sucesso!\n')
    break;

    case 2:
       if (nome === '') {
        console.log('\n Nenhum cadastro encontrado. Por favor, escolha a opção [1] para iniciar. \n');
    break;
       }
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

    break;

    case 3:
       let finalizar = readline.question('\n Confirmar saída (S/N): ');
      if (finalizar.toUpperCase() === 'S') {
          console.log('\n Tudo certo! Seus dados foram registrados com sucesso.\n');
      } else {
        console.log('\n Escolha uma opção: \n');
        console.log('[1] - Iniciar cadastro');
        console.log('[2] - Ver informações');
        console.log('[3] - Sair');

        let opcoes = readline.questionInt('Digite o número da opção desejada: ');
      }

    break;

    default:
        console.log('[ERRO] Escolha uma opção válida');

}