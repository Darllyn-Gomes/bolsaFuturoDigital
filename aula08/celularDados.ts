class Celulaar {
    public marca: string;
    public modelo: string;
    public sistemaOperacional: string;
    public armazenamentoGB: number;
    public cor: string;
    public conectadoWifi: boolean;

    constructor(marca, modelo, sistemaOperacional, armazenamentoGB, cor, conectadoWifi){
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperacional = sistemaOperacional;
        this.armazenamentoGB = armazenamentoGB;
        this.cor = cor;
        this.conectadoWifi = conectadoWifi;
    }

    ligar() {
        console.log(`Hello, ${this.marca}!`);
    }

    enviarMensagem(destinatario: string, mensagem: string) {
        console.log(`Enviando mensagem para ${destinatario}: "${mensagem}"`);
    }

    tirarFoto() {
        console.log(`Foto tirada com a câmera do ${this.modelo}!`);
    }

    navegarInternet() {
        if (this.conectadoWifi) {
            console.log(`Navegando na internet via Wi-Fi...`);
        } else {
            console.log(`Sem conexão Wi-Fi. Verifique sua rede.`);
        }
    }

    instalarApp(nomeApp: string) {
        console.log(`Instalando o aplicativo "${nomeApp}" no ${this.modelo}...`);
    }

    tocarMusica(nomeMusica: string) {
        console.log(`Tocando "${nomeMusica}" no ${this.modelo}...`);
    }
}

// Testando
const celulaar1 = new Celulaar('Motorola', 'G9', 'Android', 128, 'Branco', true);

celulaar1.ligar();
celulaar1.enviarMensagem('João', 'Oi, tudo bem?');
celulaar1.tirarFoto();
celulaar1.navegarInternet();
celulaar1.instalarApp('WhatsApp');
celulaar1.tocarMusica('Imagine - John Lennon');