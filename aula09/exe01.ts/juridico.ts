import { Pessoa } from "./pesso0a"

export class juridica extends Pessoa{
    public cnpj : number

    constructor(cnpj,nome, idade){
       super(nome, idade) 
       this.cnpj = cnpj
    }

    contratar(){}
}
