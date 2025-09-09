class Pesssoa {
    private cpf: string;
    public nome: string;
    public idade: number;
    public genero: string;
    public altura: number;
    public profissao: string;

    constructor(cpf: string, nome: string, idade: number, genero: string, altura: number, profissao: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.altura = altura;
        this.profissao = profissao;
    }

    falar() {
        console.log(`${this.nome} está falando sobre ${this.profissao}.`);
    }

    andar() {
        console.log(`${this.nome} está andando pela rua.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.profissao}.`);
    }

    comer() {
        console.log(`${this.nome} está comendo sua refeição favorita.`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo após um dia cansativo.`);
    }

    estudar() {
        console.log(`${this.nome} está estudando para se aprimorar em ${this.profissao}.`);
    }
}

// Criando uma instância
const pesssoa1 = new Pesssoa('123.456.789-00', 'Ana', 29, 'Feminino', 1.65, 'Engenheira');

// Testando os métodos
pessoa1.falar();
pessoa1.andar();
pessoa1.trabalhar();
pessoa1.comer();
pessoa1.dormir();
pessoa1.estudar();