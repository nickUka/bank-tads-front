export class Transaction {
    constructor(
        public date: string,
        public hour: string,
        public operation: string,
        public origin: string,
        public destiny: string,
        public value: number
    ) { }
}