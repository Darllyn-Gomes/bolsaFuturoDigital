// Criando a classe 'Celular'
class Celular {
  // O 'constructor' é o método que inicializa o objeto.
  constructor(marca, modelo, armazenamento) {
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamento = armazenamento;
    this.bateria = 100; // Valor inicial da bateria (100%)
    this.ligado = false; // Estado inicial: desligado
  }

  // Método para ligar o celular
  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.modelo} da ${this.marca} foi ligado.`);
    } else {
      console.log("O celular já está ligado.");
    }
  }

  // Método para desligar o celular
  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.modelo} da ${this.marca} foi desligado.`);
    } else {
      console.log("O celular já está desligado.");
    }
  }

  // Método para verificar o nível da bateria
  verificarBateria() {
    console.log(`Bateria em ${this.bateria}%.`);
  }
}

// --- Criando e usando objetos da classe Celular ---

// Criando dois novos objetos (instâncias) da classe Celular
const meuIphone = new Celular("Apple", "iPhone 15", 256);
const meuGalaxy = new Celular("Samsung", "Galaxy S24", 128);

// Acessando os atributos dos objetos
console.log(meuIphone);
console.log(meuGalaxy);

// Chamando os métodos do objeto
meuIphone.ligar(); // O iPhone 15 da Apple foi ligado.
meuIphone.verificarBateria(); // Bateria em 100%.

// Tenta ligar de novo para ver o comportamento do `if`
meuIphone.ligar(); // O celular já está ligado.

// Desligando o celular
meuIphone.desligar(); // O iPhone 15 da Apple foi desligado.

// Usando o outro objeto
meuGalaxy.ligar(); // Galaxy S24 da Samsung foi ligado.