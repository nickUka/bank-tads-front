export class Transaction {
    constructor(
        public id: number,
        public dataHora: string,
        public tipoMovimentacao: string,
        public idClienteOrigem: number,
        public valor: number,
        public idClienteDestino?: number,
    ) { }
}