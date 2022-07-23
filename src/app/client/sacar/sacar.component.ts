import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {
  
  @ViewChild('formSaque') formSaque! : NgForm;
  cliente: Client = new Client ('Ana', 'email@email.com', '12312312312', '2000', 1);
  public salario: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.salario = this.cliente.salario;
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
