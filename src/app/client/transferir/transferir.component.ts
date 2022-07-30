import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, Profile } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  @ViewChild('formTransf') formTransf! : NgForm;
  cliente: Client = new Client(1, 'Ana', 'email@email.com', Profile.Cliente, '', '123', 'email@email.com', '12312312312', '2000');
  public salario: string = "";
  public conta: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.salario = this.cliente.salario!;
  }

  transferir(valor: String, conta: String){
    if(this.formTransf.form.valid){
      
      var valorAtual = Number(this.salario);
      var valorTransf = Number(valor);
      if(valorTransf <= valorAtual) {
        var res = valorAtual - valorTransf;
        this.salario = res.toString();
      }else{
        confirm(`Digite um valor de transferência maior que o saldo atual.`);
      }
    }
  }

}
