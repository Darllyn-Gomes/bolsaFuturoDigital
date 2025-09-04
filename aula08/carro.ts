class Carro {
    public marca : String
    public cor : String
    public placa : String
    public modelo : String
    public ano : Number

    constructor(marca,cor, placa, modelo, ano){
       this.cor = cor;
       this.ano = ano;
       this.marca = marca;
       this.placa = placa;
       this.modelo = modelo; 
    }

    ligar(){
        console.log('roquerouque')
    }

    desligar(){
        console.log('Zzzzzzzzzzzzzzzz')
    }
}

const carro1 = new Carro('fit', 'rosa','piq123', 'porquinho',2025)
const carro2 = new Carro('bat', 'azul', 'pi1234', 'batmovel', 1865)



carro1.ligar();
carro1.desligar();
console.log(carro1);


carro2.ligar();