class Celulaar {
    public marca: string
    public modelo: string
    public sistemaOperacional: string
    public armazenamentoGB: number
    public cor: string
    public conectadoWifi: boolean

    constructor(marca, modelo, sistemaOperacional, armazenamentoGB, cor, conectadoWifi){
        this.marca = marca
        this.modelo = modelo
        this.sistemaOperacional = sistemaOperacional
        this.armazenamentoGB = armazenamentoGB
        this.cor = cor
        this.conectadoWifi = conectadoWifi
    }
    


    ligar() {
        console.log(`Hello, ${this.marca}!`)
    }

    enviarMensagem() {
        
    }

    tirarFoto() {

    }

    navegarInternet() {

    }

    instalarApp() {

    }

    tocarMusica() {

    }
}

const celulaar1 = new Celulaar('Motorola', 'G9', 'Android', 128, 'Branco', true);

celulaar1.ligar();