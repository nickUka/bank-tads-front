export class Endereco {
    constructor(
        public tipo: tipoEndereço,
        public cep: string,
        public logradouro: string,
        public num: number,
        public cidade: string,
        public estado: string,
        public complemento?: string,
    ){}
}

enum tipoEndereço{
    rua, avenida, travessa
}
