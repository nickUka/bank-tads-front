import { Endereco } from "./endereco.model";

export class Client {
    constructor(
        public nome: string,
        public email: string,
        public cpf: string,
        //public endereço: Endereco,
        public salario: string,
        public id?: number
    ) {
    }
}
