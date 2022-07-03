import { Endereco } from "./endereco.model";

export class Client {
    constructor(
        public name: string,
        public email: string,
        public cpf: string,
        public endereço: Endereco,
        public salario: string,
    ) {
    }
}
