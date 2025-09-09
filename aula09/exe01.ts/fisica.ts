import { juridica } from "./juridico"

export class fisica extends juridica {
    public cpf : Number;

    constructor(cpf, cnpj, nome, idade){
        super(cnpj, nome, idade);
        this.cpf = cpf;
    }

    estudar(){}
}

const fisica1 = new fisica('000.000.000-00', '999.999.999-99', 'cacatua', 36)
