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

  @ViewChild('formDeposito') formDeposito!: NgForm;

  public saldo?: SaldoResponse;
  public valorDeposito: number = 0;
  loading: boolean = false;
  message?: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  depositar() {
    if(this.formDeposito.form.valid){
    this.clientService.depositar(this.valorDeposito)?.subscribe((res) => {
      if (res) {
        return;
      } else {
        this.message = 'Erro';
      }
    }
    );   

    window.location.reload();
  }}

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
    }).closed;
    this.loading = false;
  }
}
