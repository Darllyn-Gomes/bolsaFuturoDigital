class Gatos {
    public nome: string
    public idade: number 
    public especie: string
    public cor: string
    public pesokg: number
    public domestico: boolean

    constructor(nome, idade, especie, cor,pesokg, domestico){
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
        this.cor = cor;
        this.pesokg = pesokg;
        this.domestico = domestico;
    }

    
    miar(){
        console.log(`O gato ${this.nome} mia de dengoso`)
    }

    comer(){
        console.log(`O gato ${this.nome} gosta de comer`)
    }

    arranhar(){
        console.log(`O gato ${this.nome} arranhou o sofá`)
    }

    pular(){
        console.log(`O gato ${this.nome} pulou o muro`)
    }

    ronronar(){
        console.log(`O gato ${this.nome} ronrona quando recebe carinho`)
    }

    cacar(){
        console.log(`O Gato ${this.nome} não gosta de caçar`)
    }

}
const gatos1 = new Gatos('Didi', 20, 'Felino', 'Branco', 4, true);
const gatos2 = new Gatos('Tigreal', 5, 'Felino', 'Rajado', 5.3, true);


gatos1.miar();
gatos2.arranhar();
gatos1.comer();
gatos2.pular();
gatos1.ronronar();
gatos2.cacar();