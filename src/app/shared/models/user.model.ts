import { Profile } from "..";

export class User {
    constructor(
        public id?: number,
        public nome?: string,
        public login?: string,
        public perfil?: Profile
    ) { }
}
