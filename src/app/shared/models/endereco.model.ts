export class Endereco {
    constructor(
        public tipo: string | undefined,
        public logradouro: string | undefined,
        public numero: number | undefined,
        public complemento: string | undefined,
        public cep: string | undefined,
        public cidade: string | undefined,
        public estado: string | undefined,
    ){}
}

enum tipoEndereço{
    rua, avenida, travessa
}
