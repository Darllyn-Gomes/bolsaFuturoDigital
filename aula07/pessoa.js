// Criando a classe 'Pessoa'
class Pessoa {
  // O 'constructor' define como uma nova pessoa é criada.
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  // Método para a pessoa se apresentar.
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
  }

  // Método para a pessoa trabalhar.
  trabalhar() {
    console.log(`${this.nome} está trabalhando como ${this.profissao}.`);
  }
  
  // Método para fazer a pessoa envelhecer.
  aniversario() {
    this.idade += 1; // Aumenta a idade em 1
    console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
  }
}

// --- Criando e usando objetos da classe Pessoa ---

// Criando duas novas pessoas (instâncias) da classe Pessoa
const pessoa1 = new Pessoa("Ana", 28, "Desenvolvedora");
const pessoa2 = new Pessoa("Carlos", 45, "Arquiteto");

// Usando os métodos para interagir com os objetos
pessoa1.apresentar();
// Saída: Olá, meu nome é Ana, tenho 28 anos e sou Desenvolvedora.

pessoa2.trabalhar();
// Saída: Carlos está trabalhando como Arquiteto.

// Acessando um atributo e chamando um método em sequência
console.log(`Idade inicial de Ana: ${pessoa1.idade}`);
pessoa1.aniversario();
// Saída: Feliz aniversário, Ana! Agora você tem 29 anos.

// Verificando a nova idade após o método
console.log(`Nova idade de Ana: ${pessoa1.idade}`);