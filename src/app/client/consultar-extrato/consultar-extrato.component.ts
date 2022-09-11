import { Component, OnInit } from '@angular/core';
import { Client, Profile, Transaction } from 'src/app/shared';
import SaldoResponse, { ClientService } from '../services/client.service';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {
  
  saldo?: SaldoResponse;
  message?: string;
  loading: boolean = false;
  extrato?: Array<Transaction>; 

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
    this.getExtrato();
  }

  getSaldo(): void {
    this.loading = true;
      this.clientService.getSaldo().subscribe((res) => {
        if (res) {
          console.log(res);
          this.saldo = res;
          this.loading = false;         
        }
        else {
          this.message = "Erro";
        }
      });
    this.loading = false;
  }

  getExtrato(): void {
    this.loading = true;
      this.clientService.getExtrato().subscribe((res) => {
        if (res) {
          console.log(res);
          this.extrato = res;
          this.loading = false;         
        }
        else {
          this.message = "Erro";
        }
      });
    this.loading = false;
  }

}
