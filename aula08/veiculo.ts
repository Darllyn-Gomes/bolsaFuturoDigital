class Veiculo {
    public marca : string;
    public pesoDoVeiculo : number;
    public velocidadeDoVeiculo : number;
    public power : boolean;

    constructor(marca, pesoDoVeiculo, velocidadeDoVeiculo, power){
        this.marca = marca;
        this.pesoDoVeiculo = pesoDoVeiculo;
        this.velocidadeDoVeiculo = velocidadeDoVeiculo;
        this.power = power;
    }

    velocidade(){
        console.log(`A marca: ${this.marca} e consegue atingir essa velocidade:${this.velocidadeDoVeiculo} km/h`)
    }

    peso(){
        console.log(`O O peso do veículo ${this.marca} é de ${this.pesoDoVeiculo}`)
    }

    viajar(){
        if (this.pesoDoVeiculo >= 50){
            return console.log(`${this.marca} tem o peso ideal para viajar`);
        }else{
            return console.log(`Essa marca: ${this.marca} não pode viajar`)
        }
    }

    ligarDesligar() {
    if (this.power === false) {
        console.log(`O veículo ${this.marca} está desligado.`);
    } else {
        console.log(`O veículo ${this.marca} está ligado.`);
    }
}
}
const carro = new Veiculo('Carro', 60, 50, true);  // É objeto
const moto = new Veiculo('Moto', 20, 30, false )


console.log(carro.velocidade()) 
console.log(moto.velocidade())
console.log(carro.peso());
console.log(moto.peso());

console.log(carro.viajar())

console.log(carro.ligarDesligar())

console.log(moto.ligarDesligar())