export default class Usuario {
    constructor(
        public id: number,
        public auth: boolean,
        public perfil: string,
        public token: string,
    ) {}
}

