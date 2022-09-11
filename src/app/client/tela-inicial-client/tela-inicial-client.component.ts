import { Component, OnInit } from '@angular/core';
import { Client, Profile } from 'src/app/shared';
import SaldoResponse, { ClientService } from '../services/client.service';

@Component({
  selector: 'app-tela-inicial-client',
  templateUrl: './tela-inicial-client.component.html',
  styleUrls: ['./tela-inicial-client.component.css']
})
export class TelaInicialClientComponent implements OnInit {

  saldo?: SaldoResponse;
  loading: boolean = false;
  message!: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  getSaldo(): void {
    this.loading = true;
      this.clientService.getSaldo()?.subscribe((res) => {
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
}
