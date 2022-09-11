import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, Profile } from 'src/app/shared';
import SaldoResponse, { ClientService } from '../services/client.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  @ViewChild('formTransf') formTransf! : NgForm;

  valorTrans: number = 0;
  id: number = 0;

  saldo?: SaldoResponse;
  loading: boolean = false;
  message?:string;
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  transferir(){
    if(this.formTransf.form.valid){
      if(this.saldo && this.valorTrans <= (this.saldo?.saldo + this.saldo?.limite)) {
      this.loading = true;
      this.clientService.transferir(this.valorTrans, this.id)?.subscribe((res) => {
        if (res) {
        }
        else {
          confirm("Erro");
        }
      }).closed;
      this.loading = false;      
    }}

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
