import { Profile } from "..";

export abstract class User {
    constructor(
        public id?: number,
        public nome?: string,
        public login?: string,
        public perfil?: Profile,
        public password?: string,
    ) { }
}

export class Client extends User {
    constructor(
        id?: number,
        nome?: string,
        login?: string,
        perfil?: Profile,
        password?: string,
        public conta?: string,
        public email?: string,
        public cpf?: string,
        public salario?: string,
        public limite?: string,
        public cidade?: string,
        public estado?: string,
        public rua?: string,
        public numero?: number,
        public cep?: string,
    ) {
        super(id, nome, login, perfil, password);
    }
}
export class Admin extends User {
    constructor(
        id?: number,
        nome?: string,
        login?: string,
        perfil?: Profile,
    ) {
        super(id, nome, login, perfil,);
    }
}
export class Gerente extends User {
    constructor(
        id?: number,
        nome?: string,
        login?: string,
        perfil?: Profile,
        public email?: string,
        public cpf?: string,
    ) {
        super(id, nome, login, perfil,);
    }
}
