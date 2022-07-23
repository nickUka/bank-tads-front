import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @ViewChild('formDeposito') formDeposito! : NgForm;
  cliente: Client = new Client ('Ana', 'email@email.com', '12312312312', '2000', 1);
  public salario: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.salario = this.cliente.salario;
  }

  depositar(valor: String){
    if(this.formDeposito.form.valid){
      var novoValor = Number(this.salario);
      var valorDep = Number(valor);
      var res = novoValor + valorDep;
      this.salario = res.toString();
    }
  }

}
