// Definimos a classe 'Animal'
class Animal {
  // O método 'constructor' é chamado quando um novo objeto é criado.
  constructor(especie, nome, idade) {
    this.especie = especie; // Atributo: a espécie do animal (ex: 'Cachorro', 'Gato')
    this.nome = nome;       // Atributo: o nome do animal
    this.idade = idade;     // Atributo: a idade do animal
  }

  // Método: um comportamento que o animal pode fazer.
  emitirSom() {
    console.log("Os animais emitem som.");
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

// Criando um objeto (uma instância da classe) 'Animal'.
const meuCachorro = new Animal("Cachorro", "Rex", 5);
const meuGato = new Animal("Gato", "Miau", 2);

// Acessando os atributos do objeto.
console.log(`Meu cachorro se chama ${meuCachorro.nome} e tem ${meuCachorro.idade} anos.`);
console.log(`Meu gato se chama ${meuGato.nome} e tem ${meuGato.idade} anos.`);

// Chamando os métodos do objeto.
meuCachorro.emitirSom();
meuGato.comer();