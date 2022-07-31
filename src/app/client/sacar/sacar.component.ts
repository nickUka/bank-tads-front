import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, Profile } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {
  
  @ViewChild('formSaque') formSaque! : NgForm;
  cliente: Client = new Client(1, 'Ana', 'email@email.com', Profile.Cliente, '', '123', 'email@email.com', '12312312312', '2000');
  public salario: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.salario = this.cliente.salario!;
  }

  sacar(valor: String){
    if(this.formSaque.form.valid){
      var valorAtual = Number(this.salario);
      var valorSaque = Number(valor);
      if(valorSaque <= valorAtual) {
        var res = valorAtual - valorSaque;
        this.salario = res.toString();
      }else{
        confirm(`Digite um valor de saque menor que o saldo atual.`);
      }
    }
  }

}
