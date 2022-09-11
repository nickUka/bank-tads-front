import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, Profile } from 'src/app/shared';
import SaldoResponse, { ClientService } from '../services/client.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @ViewChild('formDeposito') formDeposito! : NgForm;

  public saldo?: SaldoResponse;
  loading: boolean = false;
  message?: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  // depositar(valor: String){
  //   if(this.formDeposito.form.valid){
  //     var novoValor = Number(this.salario);
  //     var valorDep = Number(valor);
  //     var res = novoValor + valorDep;
  //     this.salario = res.toString();
  //   }
  // }

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
