import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, Profile } from 'src/app/shared';
import SaldoResponse, { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {
  
  @ViewChild('formSaque') formSaque! : NgForm;
  
  loading: boolean = false;
  message?: string;
  valorSaque: number = 0;
  saldo?: SaldoResponse;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  sacar(){
    if(this.formSaque.form.valid){
      if(this.saldo && this.valorSaque <= (this.saldo?.saldo + this.saldo?.limite)) {
        this.clientService.sacar(this.valorSaque)?.subscribe((res) => {
            if(res){
              return;
            }else{
              confirm(`Erro`);
            }
        });
      }else{
        confirm(`Digite um valor de saque menor que o saldo atual.`);
      }
    }

    window.location.reload();
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
    }).closed;
    this.loading = false;
  }

}
